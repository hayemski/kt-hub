import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeaponType, WEAPON_TYPES } from './weapon-form';
import { Card } from '../../card';

@Component({
  selector: 'app-weapon-form',
  templateUrl: './weapon-form.component.html',
  styleUrls: ['./weapon-form.component.scss']
})
export class WeaponFormComponent implements OnInit {
  @Input() card!: Card;

  wTypes: WeaponType[] = WEAPON_TYPES;

  wPW = {
    wType: this.wTypes.filter(res => res.type == 'melee')[0],
    wName:  'Power Weapon (Lethal 5+)',
    wAtt: 4,
    wBs: 3,
    D: '4/6'
  }
  weaponForm = new FormGroup({
    wType: new FormControl(this.wPW.wType),
    wName: new FormControl(this.wPW.wName),
    wAtt: new FormControl(this.wPW.wAtt),
    wBs: new FormControl(this.wPW.wBs),
    wDmg: new FormControl(this.wPW.D)
  });

  constructor() { }

  ngOnInit(): void {
    //this.weaponForm.controls['weaponTypes'].setValue(this.weaponTypes[0].type)
  }

}
