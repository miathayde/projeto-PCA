import { Component, OnInit } from '@angular/core';
import { cursosPresencialModel } from 'src/app/models/presencial.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-presencial-inscricao-modal',
  templateUrl: './presencial-inscricao-modal.component.html',
  styleUrls: ['./presencial-inscricao-modal.component.scss']
})
export class PresencialInscricaoModalComponent implements OnInit {
  tituloModal;
  preInscricao: cursosPresencialModel;

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
