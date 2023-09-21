import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { NarrativeCampaignComponent } from './components/narrative-campaign/narrative-campaign.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  { path: 'narrative', component: NarrativeCampaignComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
