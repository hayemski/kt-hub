import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-main-stats-form',
  templateUrl: './main-stats-form.component.html',
  styleUrls: ['./main-stats-form.component.scss']
})
export class MainStatsFormComponent implements OnInit {
  @Input() card!: Card;

  constructor() { }

  ngOnInit() {
  }

}
