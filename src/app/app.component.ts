import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CompAComponent} from './comp-a/comp-a.component';
import * as uuid from 'uuid/v4';
import {NodeContainerComponent} from './node-container/node-container.component';
import {CompBComponent} from './comp-b/comp-b.component';
import {attachCompToHostAndInit} from './helpers/split.helpers';
import {SplitViewNode} from './models/split-view-node';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChildren('nodeContainer') splitViewContainers: QueryList<NodeContainerComponent>;


  rootNode: SplitViewNode = {
    id: uuid(),
    splitDirection: 'vertical',
    children: [
      {
        id: uuid(),
        size: 50,
        widgetType: 'COMP_A',
        inputs: {
          username: 'avatsaev'
        }
      },
      {
        id: uuid(),
        size: 50,
        widgetType: 'COMP_B',
        inputs: {
          buttonTitle: 'CLICK!'
        }
      },
      {
        id: uuid(),
        splitDirection: 'horizontal',
        children: [
          {
            id: uuid(),
            size: 50,
            widgetType: 'COMP_A',
            inputs: {
              username: 'angular'
            }
          },
          {
            id: uuid(),
            size: 50,
            widgetType: 'COMP_B'
          }
        ]
      }
    ]
  };

  nodeTrackByFn = (i, e) => e.id;

  ngOnInit() {
    // this.widgetComponentPortal = new ComponentPortal(CompAComponent);
    // this.widgetComponentPortal.component.username = 'avatsaev';
  }

  ngAfterViewInit(): void {
    this.splitViewContainers.forEach( c => this.injectComponent(c));
  }


  injectComponent(host: NodeContainerComponent) {

    switch (host.splitViewNode.widgetType) {
      case 'COMP_A': {

        const compRef = attachCompToHostAndInit(host, CompAComponent);
        break;
      }
      case 'COMP_B': {
        const compRef = attachCompToHostAndInit(host, CompBComponent);
        break;
      }
    }
  }

  buttonClicked(e: string) {

  }


}
