import { Component, OnInit, Input } from '@angular/core';
import { atualizacaoCursos } from 'src/app/cursos-atualizacao';
import { AtualizacaoModels } from 'src/app/models/atualizacao.model';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit {
  @Input() cursosAtualizacao: any;
  atualizacaoCursos = new atualizacaoCursos().data;
  meuCurso: AtualizacaoModels;

  constructor() { }

  ngOnInit() {
  }

}
