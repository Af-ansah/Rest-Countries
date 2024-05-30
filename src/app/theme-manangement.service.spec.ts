import { TestBed } from '@angular/core/testing';

import { ThemeManangementService } from './theme-manangement.service';

describe('ThemeManangementService', () => {
  let service: ThemeManangementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeManangementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
