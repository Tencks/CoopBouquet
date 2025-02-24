import { TestBed } from '@angular/core/testing';

import { CerealesApiService } from './cereales-api.service';

describe('CerealesApiService', () => {
  let service: CerealesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerealesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
