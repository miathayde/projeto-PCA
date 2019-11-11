import { Component, OnInit } from '@angular/core';
import { atualizacaoCursos } from 'src/app/cursos-atualizacao';
import { BsModalService } from 'ngx-bootstrap';
import { AtualizacaoModalComponent } from './atualizacao-modal/atualizacao-modal.component';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit {
  info: any = null;

  atualizacaoCursos: Array <any> = new atualizacaoCursos().data;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

    ExibirInfoCurso(info: any): void {
      this.modalService.show(AtualizacaoModalComponent, {
        initialState: {
          tituloModal: "Informações sobre o curso"
        }
      });
  }

}
