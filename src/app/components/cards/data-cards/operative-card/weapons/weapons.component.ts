import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../card';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  @Input() card!: Card;

  constructor() { }

  ngOnInit() {
  }

}
