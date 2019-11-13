import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { cursosEadModel } from 'src/app/models/ead.model';

@Component({
  selector: 'app-ead-modal',
  templateUrl: './ead-modal.component.html',
  styleUrls: ['./ead-modal.component.scss']
})
export class EadModalComponent implements OnInit {
  tituloModal;
  informacoesSobreOCurso: cursosEadModel;

  constructor(
    private modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.tituloModal = this.modalService.config.initialState['tituloModal'];
    this.informacoesSobreOCurso = this.modalService.config.initialState['data'];
  }

  fechar(): void {
    this.modalRef.hide();
  }
}
