import { ScreenType } from './../models/screen-type';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CssUtilsService implements OnDestroy {
  screenType!: ScreenType;
  ScreenType$: Subject<ScreenType> = new Subject<ScreenType>();

  private resizeTimeout: any;

  constructor() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  setScreenType(screenType: ScreenType) {
    if (screenType) {
      this.ScreenType$.next(screenType);
    }
  }

  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      const width = window.innerWidth;

      if (width <= 480) {
        this.screenType = ScreenType.mobile;
      } else if (width <= 768) {
        this.screenType = ScreenType.tablet;
      } else if (width <= 1024) {
        this.screenType = ScreenType.smallDesktop;
      } else {
        this.screenType = ScreenType.largeDesktop;
      }
      this.setScreenType(this.screenType);
    }, 100);
  }
}
