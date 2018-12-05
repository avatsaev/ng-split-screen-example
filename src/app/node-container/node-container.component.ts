import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SplitViewNode} from '../app.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-node-container',
  templateUrl: './node-container.component.html',
  styleUrls: ['./node-container.component.css']
})
export class NodeContainerComponent implements OnInit {

  @Input() node: SplitViewNode;
  @ViewChild('splitViewHost', {read: ViewContainerRef}) splitViewHost: ViewContainerRef;

  @Input() dynamicSubs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

}
