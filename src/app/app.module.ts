import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { IndexhComponent } from './components/indexh/indexh.component';
import { SupportComponent } from './components/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    IndexhComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
