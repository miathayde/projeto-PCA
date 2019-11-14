import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoEadModalComponent } from './inscricao-ead-modal.component';

describe('InscricaoEadModalComponent', () => {
  let component: InscricaoEadModalComponent;
  let fixture: ComponentFixture<InscricaoEadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscricaoEadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoEadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
