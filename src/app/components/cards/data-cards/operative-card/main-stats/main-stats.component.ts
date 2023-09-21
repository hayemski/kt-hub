import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-main-stats',
  templateUrl: './main-stats.component.html',
  styleUrls: ['./main-stats.component.scss'],
})
export class MainStatsComponent implements OnInit {
  card!: Card;
  @Input() backgroundColor!: string;
  @Input() fontColor!: string;

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.card$.subscribe({
      next: (value) => {
        this.card = value;
      },
    });
  }
}
