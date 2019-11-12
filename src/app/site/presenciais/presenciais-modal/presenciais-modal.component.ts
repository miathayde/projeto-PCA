import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { cursosPresencial } from 'src/app/cursos-presencial';

@Component({
  selector: 'app-presenciais-modal',
  templateUrl: './presenciais-modal.component.html',
  styleUrls: ['./presenciais-modal.component.scss']
})
export class PresenciaisModalComponent implements OnInit {

  constructor(
    private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  fechar(): void {
    this.modalRef.hide();
  }

}
