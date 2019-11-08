import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EadPresenciaisComponent } from './ead-presenciais.component';

describe('EadPresenciaisComponent', () => {
  let component: EadPresenciaisComponent;
  let fixture: ComponentFixture<EadPresenciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EadPresenciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EadPresenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
