import { TestBed, inject } from '@angular/core/testing';

import { GameSequenceService } from './game-sequence.service';

describe('GameSequenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSequenceService]
    });
  });

  it('should be created', inject([GameSequenceService], (service: GameSequenceService) => {
    expect(service).toBeTruthy();
  }));
});
