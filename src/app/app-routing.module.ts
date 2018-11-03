import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexhComponent } from './components/indexh/indexh.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { SupportComponent } from './components/support/support.component';


const routes: Routes = [
  { path: '', redirectTo: 'indexh', pathMatch: 'full'},
  { path: 'support', component: SupportComponent},
  { path: 'indexh', component: IndexhComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
