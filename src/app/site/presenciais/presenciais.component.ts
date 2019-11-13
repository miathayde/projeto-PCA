import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { PresenciaisModalComponent } from './presenciais-modal/presenciais-modal.component';
import { cursosPresencialModel } from 'src/app/models/presencial.model';
import { PresencialCursosMock } from 'src/app/cursos-presencial';

@Component({
  selector: 'app-presenciais',
  templateUrl: './presenciais.component.html',
  styleUrls: ['./presenciais.component.scss']
})
export class PresenciaisComponent implements OnInit {
  info: any = null;

  cursosPresencial: Array <cursosPresencialModel> = PresencialCursosMock;
  presencialCursosExibidas: Array <cursosPresencialModel>;
  filtros = {
    'gestao': false,
    'direito': false,
    'educacao': false,
    'moda': false,
    'saude': false,
  }

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.clonarArray();
  }

  ExibirInfoCurso(info: any): void {
    const data = info
    this.modalService.show(PresenciaisModalComponent, {
      class: 'modal-lg',
      initialState: {
        tituloModal: "Informações sobre o curso",
        data
      }
    });
}

ExibirPreInscricao(info: any): void {
  const data = info
  this.modalService.show(PreInscricaoModalComponent, {
    class: 'modal-lg',
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
  this.filtros["direito"] = false;
  this.filtros["saude"] = false;
  this.filtros["moda"] = false;
  this.filtros["educacao"] = false;
  this.filtros["gestao"] = false;
  this.clonarArray()
}

clonarArray() {
  this.presencialCursosExibidas = Object.assign(this.cursosPresencial, []);
}

filtrarPorArea() {
  this.presencialCursosExibidas = this.cursosPresencial.filter(v =>{
    const area = v.area;
    return this.filtros[area];
  });
}

}
