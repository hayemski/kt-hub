import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-ploy-card',
  templateUrl: './ploy-card.component.html',
  styleUrls: ['./ploy-card.component.scss']
})
export class PloyCardComponent implements OnInit {
  @Input() card!: Card;
  @Input() backgroundColor!: string;
  @Input() fontColor!: string;

  constructor() { }

  ngOnInit() {

  }

}
