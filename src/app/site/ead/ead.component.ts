import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { EadModalComponent } from './ead-modal/ead-modal.component';
import { cursosEadModel } from 'src/app/models/ead.model';
import { EadCursosMock } from 'src/app/cursos-ead';
import { InscricaoEadModalComponent } from './inscricao-ead-modal/inscricao-ead-modal.component';

@Component({
  selector: 'app-ead',
  templateUrl: './ead.component.html',
  styleUrls: ['./ead.component.scss']
})
export class EadComponent implements OnInit {
  info: any = null;

  eadCursos: Array <cursosEadModel> = EadCursosMock;
  eadCursosExibidas: Array <cursosEadModel>;
  filtros = {
    'gestao': false,
    'mba': false,
  }

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.clonarArray();
  }

  ExibirInfoCurso(info: any): void {
    const data = info
    this.modalService.show(EadModalComponent, {
      backdrop: false,
      ignoreBackdropClick: true,
      class: 'modal-lg-1',
      initialState: {
        tituloModal: "Informações sobre o curso",
        data
      }
    });
}

ExibirPreInscricao(info: any): void {
  const data = info
  this.modalService.show(InscricaoEadModalComponent, {
    backdrop: false,
    ignoreBackdropClick: true,
    class: 'modal-lg-1',
    initialState: {
      tituloModal: "Informações sobre o curso",
      data
    }
  });
}

trocarFiltro(campoFiltro) {
  this.filtros[campoFiltro] = !this.filtros[campoFiltro];
  this.filtrarPorArea();
}

removerFiltro() {
  this.filtros["gestao"] = false;
  this.filtros["mba"] = false;
  this.clonarArray()
}

clonarArray() {
  this.eadCursosExibidas = Object.assign(this.eadCursos, []);
}

filtrarPorArea() {
  this.eadCursosExibidas = this.eadCursos.filter(v =>{
    const area = v.area;
    return this.filtros[area];
  });
}

}
