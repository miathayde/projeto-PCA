import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencialInscricaoModalComponent } from './presencial-inscricao-modal.component';

describe('PresencialInscricaoModalComponent', () => {
  let component: PresencialInscricaoModalComponent;
  let fixture: ComponentFixture<PresencialInscricaoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencialInscricaoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencialInscricaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
