import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../card';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tacops-selection',
  templateUrl: './tacops-selection.component.html',
  styleUrls: ['./tacops-selection.component.css']
})
export class TacopsSelectionComponent implements OnInit {
  @Input() card!: Card;
  @Input() tacops!: any;
  @Output() tacopsEmitter = new EventEmitter<string>();

  weaponForm = new FormGroup({
    wTacops: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
    this.weaponForm.get('wTacops')?.valueChanges.subscribe((value) => {
      this.card.equipment = value;
      this.tacopsEmitter.emit(value);
    });
  }

}
