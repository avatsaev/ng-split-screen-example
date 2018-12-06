import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import {PortalModule} from '@angular/cdk/portal';
import { SplitViewContainerComponent } from './split-view-container/split-view-container.component';
import { SplitViewContainerPlaceholderComponent } from './split-view-container-placeholder/split-view-container-placeholder.component';
import { SplitDashboardComponent } from './split-dashboard/split-dashboard.component';
import {CompAComponent} from './widgets/comp-a/comp-a.component';
import {CompBComponent} from './widgets/comp-b/comp-b.component';
import { SplitViewToolbarComponent } from './split-view-toolbar/split-view-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    SplitViewContainerComponent,
    SplitViewContainerPlaceholderComponent,
    SplitDashboardComponent,
    SplitViewToolbarComponent
  ],
  imports: [
    AngularSplitModule,
    BrowserModule,
    PortalModule
  ],
  providers: [],
  entryComponents: [CompAComponent, CompBComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
