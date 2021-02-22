/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TripsaverComponent } from './tripsaver.component';

describe('TripsaverComponent', () => {
  let component: TripsaverComponent;
  let fixture: ComponentFixture<TripsaverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsaverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
