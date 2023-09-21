import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from '../../card';

@Component({
  selector: 'app-ploy-selection',
  templateUrl: './ploy-selection.component.html',
  styleUrls: ['./ploy-selection.component.scss'],
})
export class PloySelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() ploys!: any;
  @Output() ployEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.weaponForm.get('wPloy')?.valueChanges.subscribe((value) => {
      this.card.ploy = value;
      this.ployEmitter.emit(value);
    });
  }

  weaponForm = new FormGroup({
    wPloy: new FormControl(),
  });
}
