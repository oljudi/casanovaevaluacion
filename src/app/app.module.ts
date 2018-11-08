import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { IndexhComponent } from './components/indexh/indexh.component';
import { SupportComponent } from './components/support/support.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { LoginComponent } from './components/login/login.component';
import { TypencuComponent } from './components/typencu/typencu.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    IndexhComponent,
    SupportComponent,
    Page3Component,
    Page4Component,
    Page5Component,
    LoginComponent,
    TypencuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
