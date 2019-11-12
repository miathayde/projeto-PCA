import { Component, OnInit } from '@angular/core';
import { AtualizacaoCursosMock } from 'src/app/cursos-atualizacao';
import { BsModalService } from 'ngx-bootstrap';
import { AtualizacaoModalComponent } from './atualizacao-modal/atualizacao-modal.component';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit {
  info: any = null;
  // informacoesCursos: atualizacaoCursos = new atualizacaoCursos();

  atualizacaoCursos: Array <AtualizacaoModels> = AtualizacaoCursosMock;
  atualizacaoCursosExibidas: Array <AtualizacaoModels>;
  filtros = {
    'educacao e humanas': false,
    'saude': false,
    'tecnologia': false,
    'sociais e aplicadas': false,
  }

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.clonarArray();
  }

    ExibirInfoCurso(info: any): void {
      const data = info
      this.modalService.show(AtualizacaoModalComponent, {
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
    console.log(this.atualizacaoCursosExibidas)
  }

  removerFiltro() {
    this.filtros["educacao e humanas"] = false;
    this.filtros["saude"] = false;
    this.filtros["tecnologia"] = false;
    this.filtros["sociais e aplicadas"] = false;
    this.clonarArray()
  }

  clonarArray() {
    this.atualizacaoCursosExibidas = Object.assign(this.atualizacaoCursos, []);
  }

  filtrarPorArea() {
    this.atualizacaoCursosExibidas = this.atualizacaoCursos.filter(v =>{
      if (this.filtros["educacao e humanas"] && v.area === 'educacao e humanas') {
        return true;
      }
      if (this.filtros["saude"] && v.area === 'saude') {
        return true;
      }
      if (this.filtros["tecnologia"] && v.area === 'tecnologia') {
        return true;
      }
      if (this.filtros["sociais e aplicadas"] && v.area === 'sociais e aplicadas') {
        return true;
      }
      return false;
    });
  }

}
