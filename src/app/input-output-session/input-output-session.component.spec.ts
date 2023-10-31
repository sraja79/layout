import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputSessionComponent } from './input-output-session.component';

describe('InputOutputSessionComponent', () => {
  let component: InputOutputSessionComponent;
  let fixture: ComponentFixture<InputOutputSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOutputSessionComponent]
    });
    fixture = TestBed.createComponent(InputOutputSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
