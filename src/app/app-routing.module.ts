import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteRoutingModule } from './site/site.routing.module';
import { HomeComponent } from './site/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SiteRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
