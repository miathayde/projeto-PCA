import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoAtualizacaoModalComponent } from './inscricao-atualizacao-modal.component';

describe('InscricaoAtualizacaoModalComponent', () => {
  let component: InscricaoAtualizacaoModalComponent;
  let fixture: ComponentFixture<InscricaoAtualizacaoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoAtualizacaoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoAtualizacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
