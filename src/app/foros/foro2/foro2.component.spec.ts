import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foro2Component } from './foro2.component';

describe('Foro2Component', () => {
  let component: Foro2Component;
  let fixture: ComponentFixture<Foro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foro2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Foro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
