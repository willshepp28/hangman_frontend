import { TestBed, inject } from '@angular/core/testing';

import { GameStatisticsService } from './game-statistics.service';

describe('GameStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStatisticsService]
    });
  });

  it('should be created', inject([GameStatisticsService], (service: GameStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
