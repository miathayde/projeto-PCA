import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciaisComponent } from './presenciais.component';

describe('PresenciaisComponent', () => {
  let component: PresenciaisComponent;
  let fixture: ComponentFixture<PresenciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
