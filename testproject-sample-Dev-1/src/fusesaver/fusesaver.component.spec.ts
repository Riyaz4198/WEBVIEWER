/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FusesaverComponent } from './fusesaver.component';

describe('FusesaverComponent', () => {
  let component: FusesaverComponent;
  let fixture: ComponentFixture<FusesaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusesaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusesaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
