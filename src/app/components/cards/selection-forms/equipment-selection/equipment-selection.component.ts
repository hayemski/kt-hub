import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../card';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipment-selection',
  templateUrl: './equipment-selection.component.html',
  styleUrls: ['./equipment-selection.component.css'],
})
export class EquipmentSelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() equipment!: any;
  @Output() equipmentEmitter = new EventEmitter<string>();

  constructor() {}

  weaponForm = new FormGroup({
    wEquipment: new FormControl(),
  });

  ngOnInit() {
    this.weaponForm.get('wEquipment')?.valueChanges.subscribe((value) => {
      this.card.equipment = value;
      this.equipmentEmitter.emit(value);
    });
  }
}
