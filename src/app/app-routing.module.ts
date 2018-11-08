import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexhComponent } from './components/indexh/indexh.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { SupportComponent } from './components/support/support.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { LoginComponent } from './components/login/login.component';
import { TypencuComponent } from './components/typencu/typencu.component';


const routes: Routes = [
  { path: '', redirectTo: 'indexh', pathMatch: 'full'},
  { path: 'support', component: SupportComponent},
  { path: 'indexh', component: IndexhComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component},
  { path: 'page4', component: Page4Component},
  { path: 'page5', component: Page5Component},
  { path: 'login', component: LoginComponent},
  { path: 'typencu', component: TypencuComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
