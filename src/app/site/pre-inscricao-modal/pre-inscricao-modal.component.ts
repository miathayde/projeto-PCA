import { Component, OnInit } from '@angular/core';
import { cursosPresencialModel } from 'src/app/models/presencial.model';
import { cursosEadModel } from 'src/app/models/ead.model';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-pre-inscricao-modal',
  templateUrl: './pre-inscricao-modal.component.html',
  styleUrls: ['./pre-inscricao-modal.component.scss']
})
export class PreInscricaoModalComponent implements OnInit {
  tituloModal;
  inscricaoPresencial: cursosPresencialModel;
  inscricaoEad: cursosEadModel;
  inscricaoAtualizacao: AtualizacaoModels;

  constructor(
    private modalService: BsModalService,
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.tituloModal = this.modalService.config.initialState['tituloModal'];
    this.inscricaoPresencial = this.modalService.config.initialState['data'];
    this.inscricaoEad = this.modalService.config.initialState['data'];
    this.inscricaoAtualizacao = this.modalService.config.initialState['data'];
  }

  fechar(): void {
    this.modalRef.hide();
  }

}
