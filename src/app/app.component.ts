import { CssUtilsService } from './services/css-utils.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ScreenType } from './models/screen-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kt-hub';

  constructor(private router: Router, cssUtilsService: CssUtilsService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        //console.log('Navigation Start:', event);
      }
    });

    cssUtilsService.onWindowResize();
  }
}
