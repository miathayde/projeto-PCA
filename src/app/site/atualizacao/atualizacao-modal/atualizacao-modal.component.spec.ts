import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizacaoModalComponent } from './atualizacao-modal.component';

describe('AtualizacaoModalComponent', () => {
  let component: AtualizacaoModalComponent;
  let fixture: ComponentFixture<AtualizacaoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizacaoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
