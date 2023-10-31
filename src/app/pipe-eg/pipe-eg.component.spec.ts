import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEgComponent } from './pipe-eg.component';

describe('PipeEgComponent', () => {
  let component: PipeEgComponent;
  let fixture: ComponentFixture<PipeEgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeEgComponent]
    });
    fixture = TestBed.createComponent(PipeEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
