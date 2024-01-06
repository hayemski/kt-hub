import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Card, Ploy } from './card';
import { FormControl, FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import { allData } from 'src/assets/compendium';
import { CardsService } from 'src/app/services/cards.service';
import { backgroundImages } from './cards-config';
import { CssUtilsService } from 'src/app/services/css-utils.service';
import { ScreenType } from 'src/app/models/screen-type';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  @ViewChild('operativeCard', { static: false }) operativeCard!: ElementRef;
  @ViewChild('ployCard', { static: false }) ployCard!: ElementRef;
  @ViewChild('equipmentCard', { static: false }) equipmentCard!: ElementRef;
  @ViewChild('tacopsCard', { static: false }) tacopsCard!: ElementRef;

  dual = false;
  allData: any = allData;
  cardType!: string;
  factions!: any;
  operatives!: any;

  @Output() ployEmitter = new EventEmitter<string>();
  backgroundImages = backgroundImages;

  backgroundColor: any = '#c54c21';
  fontColor: any = '#ffffff';

  selectionForm!: FormGroup;
  cssForm!: FormGroup;

  card!: Card;
  ploys!: Ploy[];
  equipment!: any;
  tacops!: any;

  screenType!: ScreenType;
  cardStyle: any = {};

  constructor(
    private cardsService: CardsService,
    private cssUtilsService: CssUtilsService
  ) {}

  ngOnInit() {
    this.initCssService();
    this.initCardsService();

    window.addEventListener('resize', this.updateCardWidth.bind(this));
    this.updateCardWidth(); // call once to set initial value

    this.selectionForm.get('wFaction')?.valueChanges.subscribe((value) => {
      this.selectionForm.get('wKillTeam')?.enable();
    });

    this.selectionForm.get('wKillTeam')?.valueChanges.subscribe((value) => {
      if (value != '') {
        this.selectionForm.get('wCardType')?.enable();
        this.selectionForm.get('wFactionBgd')?.enable();

        this.operatives = value.fireteams[0]?.operatives;
        this.ploys = value.ploys.strat.concat(value.ploys.tac);
        this.equipment = value.equipments.filter(
          (item: any) =>
            item.eqcategory === 'Equipment' ||
            item.eqcategory === 'Rare Equipment'
        );
        this.tacops = value.tacops;
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateCardWidth.bind(this));
  }

  initCssService() {
    this.cssUtilsService.ScreenType$.subscribe((data) => {
      if (data) {
        this.screenType = data;
      }
    });
  }

  initCardsService() {
    this.cardsService.card$.subscribe({
      next: (data) => {
        console.log(data);
        this.card = data;
      },
    });

    this.cardsService.weaponForm$.subscribe({
      next: (data) => {
        this.selectionForm = data;
      },
    });
  }

  updateCardWidth() {
    // const windowWidth = window.innerWidth;
    // const calculatedHeight = windowWidth * 2.85;

    // console.log(calculatedHeight );

    // this.cardStyle = {
    //   'max-width': `${860}px`,
    // };

    // if (this.card) {
    //   if (this.screenType !== ScreenType.largeDesktop) {
    //     if (windowWidth < 860) this.card.width = windowWidth-30;
    //     this.card.height = calculatedHeight;
    //   }
    // }
  }

  changePloy(event: any) {
    this.ploys = event as Ploy[];
  }

  changePloySelect(event: any) {
    this.card.ploy = event;
  }

  changeEquipment(event: any) {
    this.card.equipment = event;
  }

  changeTacops(event: any) {
    this.card.tacops = event;
  }

  downloadImage() {
    switch (this.cardType) {
      case 'operative':
        html2canvas(this.operativeCard.nativeElement, { scale: 2.85 }).then(
          (canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = this.card.name + '.png';
            link.href = imgData;
            link.click();
          }
        );
        break;
      case 'ploy':
        html2canvas(this.ployCard.nativeElement, { scale: 2.85 }).then(
          (canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = this.card.ploy?.ployname + '.png';
            link.href = imgData;
            link.click();
          }
        );
        break;
      case 'equipment':
        html2canvas(this.equipmentCard.nativeElement, { scale: 2.85 }).then(
          (canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = this.card.equipment?.eqname + '.png';
            link.href = imgData;
            link.click();
          }
        );
        break;
      case 'tacops':
        html2canvas(this.tacopsCard.nativeElement, { scale: 2.85 }).then(
          (canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = this.card.tacops?.title + '.png';
            link.href = imgData;
            link.click();
          }
        );
        break;
      default:
        return;
    }
  }

  typeSelect(value: any) {
    this.cardType = value;
  }

  updateBckg(event: any) {
    this.cardsService.updateBckg(event.value);
  }
}
