import { Component, OnInit } from '@angular/core';
import { atualizacaoCursos } from 'src/app/cursos-atualizacao';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.scss']
})
export class AtualizacaoComponent implements OnInit {
  atualizacaoCursos: Array <any> = new atualizacaoCursos().data;

  constructor() { }

  ngOnInit() {
  }

}
