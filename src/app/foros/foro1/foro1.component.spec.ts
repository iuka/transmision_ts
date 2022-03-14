import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foro1Component } from './foro1.component';

describe('Foro1Component', () => {
  let component: Foro1Component;
  let fixture: ComponentFixture<Foro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Foro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
