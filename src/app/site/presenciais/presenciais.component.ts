import { Component, OnInit } from '@angular/core';
import { cursosPresencial } from 'src/app/cursos-presencial';
import { BsModalService } from 'ngx-bootstrap';
import { PresenciaisModalComponent } from './presenciais-modal/presenciais-modal.component';

@Component({
  selector: 'app-presenciais',
  templateUrl: './presenciais.component.html',
  styleUrls: ['./presenciais.component.scss']
})
export class PresenciaisComponent implements OnInit {
  presenciaisCursos: Array <any> = new cursosPresencial().data;
  info: any = null;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  ExibirInfoCurso(info: any): void {
    this.modalService.show(PresenciaisModalComponent, {
      class: 'modal-lg',
      initialState: {
        tituloModal: "Informações sobre o curso"
      }
    });
}

}
