import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CdkPortalOutlet, ComponentPortal} from '@angular/cdk/portal';
import {CompAComponent} from './comp-a/comp-a.component';
import * as uuid from 'uuid/v4';


export interface SplitViewNode {
  id: string;
  title?: string;
  splitDirection?: 'vertical' | 'horizontal';
  children?: SplitViewNode[];
  parentId?: string;
  widgetType?: string;
  inputs?: Object;
  size?: number;
  visible?: boolean;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('portalHost') portalHost: CdkPortalOutlet;
  // widgetComponentPortal: ComponentPortal;

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
            widgetType: 'A'
          },
          {
            id: uuid(),
            size: 50,
            widgetType: 'C'
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
    console.log(this.portalHost);

    // this.widgetComponentPortal = new ComponentPortal(CompAComponent);
    // this.portalHost.attachComponentPortal(this.widgetComponentPortal)

  }


}
