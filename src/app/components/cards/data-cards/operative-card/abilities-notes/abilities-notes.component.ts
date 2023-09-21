import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-abilities-notes',
  templateUrl: './abilities-notes.component.html',
  styleUrls: ['./abilities-notes.component.scss']
})
export class AbilitiesNotesComponent implements OnInit {
  card!: Card;
  @Input() dual:boolean = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.cardsService.card$.subscribe(value=>this.card=value);
  }

  abilitiesLength(): boolean {
    if (this.card?.abilities?.length !== undefined && this.card.abilities.length > 0) {
      return true;
    }
    return false;
  }

  uniqueActionsLength():boolean{
    if (this.card?.uniqueActions?.length !== undefined && this.card.uniqueActions.length > 0) {
      return true;
    }
    return false;
  }
}


