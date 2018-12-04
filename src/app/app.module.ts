import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularSplitModule } from 'angular-split';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    AngularSplitModule,
    BrowserModule
  ],
  providers: [],
  entryComponents: [CompAComponent, CompBComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
