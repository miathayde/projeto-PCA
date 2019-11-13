import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInscricaoModalComponent } from './pre-inscricao-modal.component';

describe('PreInscricaoModalComponent', () => {
  let component: PreInscricaoModalComponent;
  let fixture: ComponentFixture<PreInscricaoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreInscricaoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreInscricaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
