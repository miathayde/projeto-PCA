import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EadComponent } from './ead.component';

describe('EadComponent', () => {
  let component: EadComponent;
  let fixture: ComponentFixture<EadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
