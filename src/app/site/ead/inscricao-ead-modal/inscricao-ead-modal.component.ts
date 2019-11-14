import { Component, OnInit } from '@angular/core';
import { cursosEadModel } from 'src/app/models/ead.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-inscricao-ead-modal',
  templateUrl: './inscricao-ead-modal.component.html',
  styleUrls: ['./inscricao-ead-modal.component.scss']
})
export class InscricaoEadModalComponent implements OnInit {
  tituloModal;
  preInscricao: cursosEadModel;

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
