import { TestBed, inject } from '@angular/core/testing';

import { InnerWidthService } from './inner-width.service';

describe('InnerWidthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnerWidthService]
    });
  });

  it('should be created', inject([InnerWidthService], (service: InnerWidthService) => {
    expect(service).toBeTruthy();
  }));
});
