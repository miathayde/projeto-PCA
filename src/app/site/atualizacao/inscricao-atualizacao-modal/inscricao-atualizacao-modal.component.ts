import { Component, OnInit } from '@angular/core';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-inscricao-atualizacao-modal',
  templateUrl: './inscricao-atualizacao-modal.component.html',
  styleUrls: ['./inscricao-atualizacao-modal.component.scss']
})
export class InscricaoAtualizacaoModalComponent implements OnInit {
  tituloModal;
  preInscricao: AtualizacaoModels;

  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.tituloModal = this.modalService.config.initialState['tituloModal'];
    this.preInscricao = this.modalService.config.initialState['data'];
  }

  fechar(): void {
    this.modalRef.hide();
  }

}
