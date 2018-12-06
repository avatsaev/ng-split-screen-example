import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SplitViewNode} from '../models/split-view-node';

@Component({
  selector: 'app-split-view-toolbar',
  templateUrl: './split-view-toolbar.component.html',
  styleUrls: ['./split-view-toolbar.component.scss']
})
export class SplitViewToolbarComponent implements OnInit {
  @Input() splitViewNode: SplitViewNode;
  @Output() close = new EventEmitter<string>();
  @Output() split = new EventEmitter<{direction: string, nodeId: string}>();

  constructor() { }

  ngOnInit() {
  }

}
