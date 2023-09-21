/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PloyCardComponent } from './ploy-card.component';

describe('PloyCardComponent', () => {
  let component: PloyCardComponent;
  let fixture: ComponentFixture<PloyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
