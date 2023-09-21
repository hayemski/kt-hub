import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponFormComponent } from './weapon-form.component';

describe('WeaponFormComponent', () => {
  let component: WeaponFormComponent;
  let fixture: ComponentFixture<WeaponFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
