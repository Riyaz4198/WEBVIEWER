/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterrupterElastimoldComponent } from './interrupter-elastimold.component';

describe('InterrupterElastimoldComponent', () => {
  let component: InterrupterElastimoldComponent;
  let fixture: ComponentFixture<InterrupterElastimoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterrupterElastimoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrupterElastimoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
