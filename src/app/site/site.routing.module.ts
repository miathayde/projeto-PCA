import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EadComponent } from './ead/ead.component';
import { PresenciaisComponent } from './presenciais/presenciais.component';

const routes: Routes = [
    { path: 'cursos-presenciais', component: PresenciaisComponent },
    { path: 'cursos-EAD', component: EadComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class SiteRoutingModule { }