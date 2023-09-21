import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './narrative-campaign.component.html',
  styleUrls: ['./narrative-campaign.component.css']
})
export class NarrativeCampaignComponent {
  killTeamName: string = '';
  playerName: string = '';
  factionKeyword: string = '';
  baseOfOperation: string = '';
  quirks: string = '';
  specOpsLog1: string = '';
  specOpsLog2: string = '';
  specOpsLog3: string = '';
  reqPoints: string = '';
  assetCap: string = '';
  strategicAsset1: string = '';
  strategicAsset2: string = '';
  strategicAsset3: string = '';
  strategicAsset4: string = '';
  strategicAsset5: string = '';
  stash: string = '';
  notes: string = '';
  submitted = false;
  operatives = Array.from({ length: 21 }, () => ({
    name: '',
    class: '',
    loadout: '',
    bh: '',
    rank: '',
    xp: ''
  }));
  submit() {
    this.submitted = true;
  }
}