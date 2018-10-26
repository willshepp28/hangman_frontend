import { TestBed, inject } from '@angular/core/testing';

import { WordDisplayService } from './word-display.service';

describe('WordDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordDisplayService]
    });
  });

  it('should be created', inject([WordDisplayService], (service: WordDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
