import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ComponentFactoryResolver, ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import {SplitViewContainerComponent} from '../split-view-container/split-view-container.component';
import {SplitViewNode} from '../models/split-view-node';
import {findNode, getWidgetNodes, hookComponentOutputs, initComponentInputs, uuid} from '../helpers';
import {SplitViewComponentPlaceholder} from '../models/split-view-component-placeholder';

@Component({
  selector: 'app-split-dashboard',
  templateUrl: './split-dashboard.component.html',
  styleUrls: ['./split-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitDashboardComponent implements OnInit, OnChanges {

  @ViewChildren('nodeContainer') splitViewContainers: QueryList<SplitViewContainerComponent>;
  @Input() widgetList: Array<{title: string, type: string}> = [];

  @Output() widgetInjectionRequest = new EventEmitter<{nodeId: string, widgetType: string, inputs?: any}>();
  @Output() splitChanges = new EventEmitter<SplitViewNode>();
  @Output() widgetInjected = new EventEmitter<{
    node: SplitViewNode
  }>();


  @Input() rootNode: SplitViewNode = {
    id: uuid(),
    splitDirection: 'vertical',

  };

  nodeTrackByFn = (i, e) => e.id;


  constructor(
    private compFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['rootNode'] && changes['rootNode'].currentValue !== undefined ) {

      setTimeout(() => { // pass the task in the event loop, because view isnt inited yet
        const widgetNodes = getWidgetNodes(this.rootNode);

        for (const w of widgetNodes) {
          this.widgetInjectionRequest.emit({
            nodeId: w.id,
            widgetType: w.widgetType,
            inputs: w.inputs
          });
        }
      });
    }
  }

  onSplit({direction, nodeId}) {

    const node = findNode(this.rootNode, nodeId);

    node.splitDirection = direction;

    node.children = [
      {
        id: uuid(),
        parentId: node.id
      },
      {
        id: uuid(),
        parentId: node.id
      }

    ];

    this.splitChanges.emit(this.rootNode);

  }

  onClose(nodeId: string) {
    const node = findNode(this.rootNode, nodeId);
    const parentNode = findNode(this.rootNode, node.parentId);
    parentNode.children = parentNode.children.filter(n => n.id !== nodeId);
    if (parentNode.children.length === 0) {
      parentNode.children = undefined;
    }
    this.splitChanges.emit(this.rootNode);

  }

  onWidgetSelected({widgetType, nodeId}: {widgetType: string, nodeId: string}) {
    this.widgetInjectionRequest.emit({widgetType, nodeId});
  }

  injectWidget(widgetDef: SplitViewComponentPlaceholder<any>, nodeId: string): ComponentRef<any> {
    const node = findNode(this.rootNode, nodeId);
    node.widgetType = widgetDef.params.widgetType;
    node.inputs = widgetDef.params.inputs;
    this.cdr.detectChanges();

    const splitViewChildRef = this.splitViewContainers.find( c => c.splitViewNode.id === nodeId);

    if (splitViewChildRef) {

      const splitViewHost = splitViewChildRef.splitViewHost;

      splitViewHost.clear();
      const compFactory = this.compFactoryResolver.resolveComponentFactory(widgetDef.component);
      const componentRef = splitViewHost.createComponent(compFactory);


      // Initiate inputs
      initComponentInputs(componentRef.instance, widgetDef.params.inputs);

      // Hookup outputs
      splitViewChildRef.dynamicSubs = hookComponentOutputs(componentRef.instance, widgetDef.params.outputHandlers);

      // provoke change detection programmatically on the dynamic component
      const compCdr = componentRef.injector.get(ChangeDetectorRef);
      compCdr.detectChanges();

      this.widgetInjected.emit({node});
      this.splitChanges.emit(this.rootNode);

      return componentRef;

    } else {
      console.error(`SplitScreen: Split view with ID ${nodeId} not found`);
    }

  }


}
