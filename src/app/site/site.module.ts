import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxUiHeroModule } from 'ngx-ui-hero';
import { SiteRoutingModule } from './site.routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TimepickerModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        NgxUiHeroModule,
        SiteRoutingModule,
        FormsModule,
        SharedModule,
        TimepickerModule
    ],
    entryComponents: [
        
    ]
})

export class SiteModule { }