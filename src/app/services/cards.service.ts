import { Injectable } from '@angular/core';
import { Card, Ploy } from '../components/cards/card';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  card: Card = {
    name: '',
    movement: '0',
    APL: 0,
    GA: 0,
    DF: 0,
    save: 0,
    wounds: 0,
    weapons: undefined,
    abilitiesFull: 'full',
    abilities: undefined,
    uniqueActions: undefined,
    width: 630,
    height: 880,
    svgBckg:'kill-team'
  };

  ploys: Ploy[] = [
    {
      factionid: '',
      killteamid: '',
      ployid: '',
      ployname: '',
      ploytype: '',
      CP: '',
      description: '',
    },
  ];

  cssForm = new FormGroup({
    width: new FormControl(600),
    height: new FormControl(800),
  });

  weaponForm = new FormGroup({
    wFaction: new FormControl(null, Validators.required),
    wKillTeam: new FormControl({ value: '', disabled: true }),
    wOperative: new FormControl('', Validators.required),
    wPloy: new FormControl('', Validators.required),
    wCardType: new FormControl({ value: '', disabled: true }),
    wFactionBgd: new FormControl({ value: 'kill-team', disabled: true })
  });

  operative!: any;

  card$ = new BehaviorSubject<Card>(this.card);
  operative$!: BehaviorSubject<any>;
  ploys$ = new BehaviorSubject<Ploy[]>(this.ploys);
  weaponForm$ = new BehaviorSubject<FormGroup>(this.weaponForm);

  constructor() {}

  updateCard(selectedCard: Card) {
    this.card = {
      ...this.card,
      ...selectedCard
    }
    this.card$.next(this.card);
  }

  updateOperative(operative: any) {
    this.operative = operative;
    this.operative$.next(operative);
  }

  updateBckg(value: any) {
    this.card.svgBckg = value;
    this.card$.next(this.card);
  }
}
