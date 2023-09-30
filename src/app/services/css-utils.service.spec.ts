import { TestBed } from '@angular/core/testing';

import { CssUtilsService } from './css-utils.service';

describe('CssUtilsService', () => {
  let service: CssUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
