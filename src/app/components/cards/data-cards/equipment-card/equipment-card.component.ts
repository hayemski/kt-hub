import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css']
})
export class EquipmentCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() backgroundColor!: string;
  @Input() fontColor!: string;
  @Input() equipment!:string;

  constructor() { }

  ngOnInit() {
  }

}
