import { TestBed, inject } from '@angular/core/testing';

import { SavedGamesService } from './saved-games.service';

describe('SavedGamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedGamesService]
    });
  });

  it('should be created', inject([SavedGamesService], (service: SavedGamesService) => {
    expect(service).toBeTruthy();
  }));
});
