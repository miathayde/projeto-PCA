import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';

@Component({
  selector: 'app-atualizacao-modal',
  templateUrl: './atualizacao-modal.component.html',
  styleUrls: ['./atualizacao-modal.component.scss']
})
export class AtualizacaoModalComponent implements OnInit {
  tituloModal;
  informacoesSobreOCurso: AtualizacaoModels;

  constructor(
    private modalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.tituloModal = this.modalService.config.initialState['tituloModal'];
    this.informacoesSobreOCurso = this.modalService.config.initialState['data'];
    console.log(this.informacoesSobreOCurso);
  }

  fechar(): void {
    this.modalRef.hide();
  }

}
