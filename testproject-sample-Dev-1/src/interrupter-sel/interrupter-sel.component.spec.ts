/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterrupterSelComponent } from './interrupter-sel.component';

describe('InterrupterSelComponent', () => {
  let component: InterrupterSelComponent;
  let fixture: ComponentFixture<InterrupterSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterrupterSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrupterSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
