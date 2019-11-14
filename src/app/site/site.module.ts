import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxUiHeroModule } from 'ngx-ui-hero';
import { SiteRoutingModule } from './site.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TimepickerModule, ModalModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { PresenciaisComponent } from './presenciais/presenciais.component';
import { EadComponent } from './ead/ead.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';
import { AtualizacaoModalComponent } from './atualizacao/atualizacao-modal/atualizacao-modal.component';
import { EadModalComponent } from './ead/ead-modal/ead-modal.component';
import { PresenciaisModalComponent } from './presenciais/presenciais-modal/presenciais-modal.component';
import { PresencialInscricaoModalComponent } from './presenciais/presencial-inscricao-modal/presencial-inscricao-modal.component';
import { InscricaoEadModalComponent } from './ead/inscricao-ead-modal/inscricao-ead-modal.component';
import { InscricaoAtualizacaoModalComponent } from './atualizacao/inscricao-atualizacao-modal/inscricao-atualizacao-modal.component';

@NgModule({
    declarations: [

    HomeComponent,

    PresenciaisComponent,

    EadComponent,

    AtualizacaoComponent,

    AtualizacaoModalComponent,

    EadModalComponent,

    PresenciaisModalComponent,

    PresencialInscricaoModalComponent,

    InscricaoEadModalComponent,

    InscricaoAtualizacaoModalComponent],
    imports: [
        CommonModule,
        NgxUiHeroModule,
        SiteRoutingModule,
        FormsModule,
        SharedModule,
        TimepickerModule,
        ModalModule.forRoot()
    ],
    entryComponents: [
        AtualizacaoModalComponent,
        EadModalComponent,
        PresenciaisModalComponent,
        PresencialInscricaoModalComponent,
        InscricaoEadModalComponent,
        InscricaoAtualizacaoModalComponent
    ]
})

export class SiteModule { }