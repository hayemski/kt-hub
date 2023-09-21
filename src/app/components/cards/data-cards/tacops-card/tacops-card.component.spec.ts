/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TacopsCardComponent } from './tacops-card.component';

describe('TacopsCardComponent', () => {
  let component: TacopsCardComponent;
  let fixture: ComponentFixture<TacopsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacopsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacopsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
