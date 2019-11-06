import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteRoutingModule } from './site/site.routing.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SiteRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
