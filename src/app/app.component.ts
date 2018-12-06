import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {SplitDashboardComponent} from './split-dashboard/split-dashboard.component';
import {SplitViewComponentPlaceholder} from './models/split-view-component-placeholder';
import {CompAComponent} from './widgets/comp-a/comp-a.component';
import {CompBComponent} from './widgets/comp-b/comp-b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @ViewChild('splitDashboard') splitDashboard: SplitDashboardComponent;

  widgetList: Array<{type: string, title: string}> = [
    {
      type: 'COMP_A',
      title: 'COMP A'
    },
    {
      type: 'COMP_B',
      title: 'COMP B'
    }
  ];

  initialSplitView = {
    'id':  'd16b6304-331f-4fde-9fdc-d14fc1ca106b',
    'splitDirection': 'vertical',
    'children': [
      {
        'id': '7596bea4-4d2c-4ec4-8af8-3cf395387a35',
        'parentId': 'd16b6304-331f-4fde-9fdc-d14fc1ca106b',
        'splitDirection': 'horizontal',
        'children': [
          {
            'id': 'df3ed424-49d2-4ce7-8d4b-2c33d8156dfd',
            'parentId': '7596bea4-4d2c-4ec4-8af8-3cf395387a35',
            'widgetType': 'COMP_A',
            'inputs': {
              'username': 'avatsaev'
            }
          },
          {
            'id': '8d989259-b38b-4555-a33b-f5e4aba2b61e',
            'parentId': '7596bea4-4d2c-4ec4-8af8-3cf395387a35',
            'widgetType': 'COMP_B',
            'inputs': {
              'buttonTitle': 'CLICK!'
            }
          }
        ]
      },
      {
        'id': 'be52c4b5-4a0d-4b40-83dc-5984ad4c2ffe',
        'parentId': 'd16b6304-331f-4fde-9fdc-d14fc1ca106b',
        'widgetType': 'COMP_A',
        'inputs': {
          'username': 'X3'
        }
      },
      {
        'id': 'be52c4b5-4a0d-4b40-83dc-5984ad4c2ff1',
        'parentId': 'd16b6304-331f-4fde-9fdc-d14fc1ca106b'
      }
    ]
  };




  onWidgetInjectionRequest({widgetType, nodeId, inputs}: {widgetType: string, nodeId: string, inputs?: any}) {

    let componentPlaceholder;

    switch (widgetType) {

      case 'COMP_A': {
        componentPlaceholder = new SplitViewComponentPlaceholder<CompAComponent>(
          CompAComponent, {
            widgetType,
            inputs: inputs ? inputs : {
              username: 'avatsaev'
            }
          }
        );
        break;
      }

      case 'COMP_B': {
        componentPlaceholder = new SplitViewComponentPlaceholder<CompBComponent>(
          CompBComponent, {
            widgetType,
            inputs:  inputs ? inputs : {
              buttonTitle: 'CLICK!'
            }
          }
        );
        break;
      }
    }

    const componentRef = this.splitDashboard.injectWidget(componentPlaceholder, nodeId);
  }

}
