import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SymbolReplace } from './utils/pipes/symbolReplace';
import { CardsComponent } from './components/cards/cards.component';
import { PloyCardComponent } from './components/cards/data-cards/ploy-card/ploy-card.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OperativeSelectionComponent } from './components/cards/selection-forms/operative-selection/operative-selection.component';
import { MaterialModule } from './material/material.module';
import { WeaponsComponent } from './components/cards/data-cards/operative-card/weapons/weapons.component';
import {
  MAT_COLOR_FORMATS,
  NGX_MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
} from '@angular-material-components/color-picker';
import { ColorPickerModule } from 'ngx-color-picker';
import { EquipmentSelectionComponent } from './components/cards/selection-forms/equipment-selection/equipment-selection.component';
import { TacopsCardComponent } from './components/cards/data-cards/tacops-card/tacops-card.component';
import { NarrativeCampaignComponent } from './components/narrative-campaign/narrative-campaign.component';
import { MainStatsComponent } from './components/cards/data-cards/operative-card/main-stats/main-stats.component';
import { WeaponFormComponent } from './components/cards/forms/weapon-form/weapon-form.component';
import { MainStatsFormComponent } from './components/cards/forms/main-stats-form/main-stats-form.component';
import { AbilitiesNotesComponent } from './components/cards/data-cards/operative-card/abilities-notes/abilities-notes.component';
import { PloySelectionComponent } from './components/cards/selection-forms/ploy-selection/ploy-selection.component';
import { EquipmentCardComponent } from './components/cards/data-cards/equipment-card/equipment-card.component';
import { TacopsSelectionComponent } from './components/cards/selection-forms/tacops-selection/tacops-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    MainStatsComponent,
    WeaponFormComponent,
    MainStatsFormComponent,
    OperativeSelectionComponent,
    SymbolReplace,
    AbilitiesNotesComponent,
    PloyCardComponent,
    PloySelectionComponent,
    WeaponsComponent,
    EquipmentCardComponent,
    EquipmentSelectionComponent,
    TacopsSelectionComponent,
    TacopsCardComponent,
    NarrativeCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatColorPickerModule,
    ColorPickerModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
