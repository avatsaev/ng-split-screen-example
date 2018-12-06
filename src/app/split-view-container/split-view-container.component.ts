import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SplitViewNode} from '../models/split-view-node';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-split-view-container',
  templateUrl: './split-view-container.component.html',
  styleUrls: ['./split-view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitViewContainerComponent implements OnInit, OnDestroy {

  @Input() splitViewNode: SplitViewNode;
  @ViewChild('splitViewHost', {read: ViewContainerRef}) splitViewHost: ViewContainerRef;

  @Input() dynamicSubs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

    if (this.dynamicSubs) {
      this.dynamicSubs.map(s => {
        try {
          s.unsubscribe();
        } catch (e) {
          console.warn('unsub unsuccessful', e);
        }
      });
    }
  }

}
