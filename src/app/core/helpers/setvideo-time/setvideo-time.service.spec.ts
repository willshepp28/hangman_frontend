import { TestBed, inject } from '@angular/core/testing';

import { SetvideoTimeService } from './setvideo-time.service';

describe('SetvideoTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetvideoTimeService]
    });
  });

  it('should be created', inject([SetvideoTimeService], (service: SetvideoTimeService) => {
    expect(service).toBeTruthy();
  }));
});
