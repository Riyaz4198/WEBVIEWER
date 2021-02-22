/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecloserBeckComponent } from './recloser-beck.component';

describe('RecloserBeckComponent', () => {
  let component: RecloserBeckComponent;
  let fixture: ComponentFixture<RecloserBeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecloserBeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecloserBeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
