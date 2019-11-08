import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EadComponent } from './ead/ead.component';
import { PresenciaisComponent } from './presenciais/presenciais.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';

const routes: Routes = [
    { path: 'cursos-pos-presenciais', component: PresenciaisComponent },
    { path: 'cursos-pos-EAD', component: EadComponent },
    { path: 'cursos-atualizacao', component: AtualizacaoComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class SiteRoutingModule { }