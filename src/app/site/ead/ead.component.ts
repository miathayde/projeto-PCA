import { Component, OnInit } from '@angular/core';
import { cursosEad } from 'src/app/cursos-ead';
import { BsModalService } from 'ngx-bootstrap';
import { EadModalComponent } from './ead-modal/ead-modal.component';

@Component({
  selector: 'app-ead',
  templateUrl: './ead.component.html',
  styleUrls: ['./ead.component.scss']
})
export class EadComponent implements OnInit {
  eadCursos: Array <any> = new cursosEad().data;
  info: any = null;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  ExibirInfoCurso(info: any): void {
    this.modalService.show(EadModalComponent, {
      class: 'modal-lg',
      initialState: {
        tituloModal: "Informações sobre o curso"
      }
    });
}

}
