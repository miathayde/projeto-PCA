import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { atualizacaoCursos } from 'src/app/cursos-atualizacao';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';

@Component({
  selector: 'app-atualizacao-modal',
  templateUrl: './atualizacao-modal.component.html',
  styleUrls: ['./atualizacao-modal.component.scss']
})
export class AtualizacaoModalComponent implements OnInit {
  meuCurso: AtualizacaoModels;
  tituloModal: string;

  constructor(
    private modalRef: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.tituloModal = this.modalService.config.initialState["tituloModal"];
  }

  fechar(): void {
    this.modalRef.hide();
  }
}
