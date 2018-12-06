import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SplitViewNode} from '../models/split-view-node';
import {Subscription} from 'rxjs';
import {CdkPortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'app-node-container',
  templateUrl: './node-container.component.html',
  styleUrls: ['./node-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodeContainerComponent implements OnInit {

  @Input() splitViewNode: SplitViewNode;
  @ViewChild('portalHost') portalHost: CdkPortalOutlet;

  @Input() dynamicSubs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

}
