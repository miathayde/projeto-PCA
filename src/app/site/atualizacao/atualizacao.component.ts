import { Component, OnInit } from '@angular/core';
import { AtualizacaoCursosMock } from 'src/app/cursos-atualizacao';
import { BsModalService } from 'ngx-bootstrap';
import { AtualizacaoModalComponent } from './atualizacao-modal/atualizacao-modal.component';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit {
  info: any = null;
  // informacoesCursos: atualizacaoCursos = new atualizacaoCursos();

  atualizacaoCursos: Array <AtualizacaoModels> = AtualizacaoCursosMock;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

    ExibirInfoCurso(info: any): void {
      const data = info
      this.modalService.show(AtualizacaoModalComponent, {
        class: 'modal-lg',
        initialState: {
          tituloModal: "Informações sobre o curso",
          data
        }
      });
  }

}
