import { TestBed } from '@angular/core/testing';

import { SendMailsService } from './send-mails.service';

describe('SendMailsService', () => {
  let service: SendMailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
