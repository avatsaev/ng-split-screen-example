import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SplitViewNode} from '../models/split-view-node';

@Component({
  selector: 'app-split-view-container-placeholder',
  templateUrl: './split-view-container-placeholder.component.html',
  styleUrls: ['./split-view-container-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitViewContainerPlaceholderComponent implements OnInit {

  @Input() widgetList;
  @Input() splitViewNode: SplitViewNode;
  @Output() widgetSelected = new EventEmitter<{widgetType: string, nodeId: string}>();
  @Output() split = new EventEmitter<{direction: string, nodeId: string}>();

  constructor() { }

  ngOnInit() {
  }

}
