import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeSelectionComponent } from './operative-selection.component';

describe('OperativeSelectionComponent', () => {
  let component: OperativeSelectionComponent;
  let fixture: ComponentFixture<OperativeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
