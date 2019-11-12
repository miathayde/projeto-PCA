import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-ead-modal',
  templateUrl: './ead-modal.component.html',
  styleUrls: ['./ead-modal.component.scss']
})
export class EadModalComponent implements OnInit {

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar(): void {
    this.modalRef.hide();
  }
}
