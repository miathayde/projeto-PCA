import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-atualizacao-modal',
  templateUrl: './atualizacao-modal.component.html',
  styleUrls: ['./atualizacao-modal.component.scss']
})
export class AtualizacaoModalComponent implements OnInit {

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar(): void {
    this.modalRef.hide();
  }
}
