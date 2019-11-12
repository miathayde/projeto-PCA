import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenciaisModalComponent } from './presenciais-modal.component';

describe('PresenciaisModalComponent', () => {
  let component: PresenciaisModalComponent;
  let fixture: ComponentFixture<PresenciaisModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenciaisModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenciaisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
