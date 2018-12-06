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
    console.log(componentRef);
  }

}
