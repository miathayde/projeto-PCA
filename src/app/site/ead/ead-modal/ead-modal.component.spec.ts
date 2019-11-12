import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EadModalComponent } from './ead-modal.component';

describe('EadModalComponent', () => {
  let component: EadModalComponent;
  let fixture: ComponentFixture<EadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
