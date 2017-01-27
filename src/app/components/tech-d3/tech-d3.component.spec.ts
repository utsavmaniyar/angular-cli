/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechD3Component } from './tech-d3.component';

describe('TechD3Component', () => {
  let component: TechD3Component;
  let fixture: ComponentFixture<TechD3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechD3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
