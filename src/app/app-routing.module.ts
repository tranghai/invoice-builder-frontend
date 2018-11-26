import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path : 'invoice-builder',
  loadChildren: './dashboard/dashboard.module#DashboardModule'
},{
  path : '**',
  redirectTo: 'invoice-builder'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }