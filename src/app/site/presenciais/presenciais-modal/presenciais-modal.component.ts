import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { cursosPresencialModel } from 'src/app/models/presencial.model';

@Component({
  selector: 'app-presenciais-modal',
  templateUrl: './presenciais-modal.component.html',
  styleUrls: ['./presenciais-modal.component.scss']
})
export class PresenciaisModalComponent implements OnInit {
  tituloModal;
  informacoesSobreOCurso: cursosPresencialModel;

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
