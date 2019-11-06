import { CommonModule } from '@angular/common';
import { NgxUiHeroModule, NgxUiHeroDataGridModule, NgxUiHeroInputFormsModule, NgxUiHeroChartsModule } from 'ngx-ui-hero';
import { FormsModule } from '@angular/forms';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
      CommonModule,
      NgxUiHeroModule,
      NgxUiHeroDataGridModule,
      NgxUiHeroInputFormsModule,
      NgxUiHeroChartsModule,
      ModalModule.forRoot(),
      TabsModule.forRoot(),
      FormsModule,
    ],
    declarations: [],
    providers: [],
    exports: [
        NgxUiHeroModule,
        NgxUiHeroDataGridModule,
        NgxUiHeroInputFormsModule,
        NgxUiHeroChartsModule,
        TabsModule
    ]
})

export class SharedModule { }