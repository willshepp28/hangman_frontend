import { TestBed, async, inject } from '@angular/core/testing';

import { GameStatusGuard } from './game-status.guard';

describe('GameStatusGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameStatusGuard]
    });
  });

  it('should ...', inject([GameStatusGuard], (guard: GameStatusGuard) => {
    expect(guard).toBeTruthy();
  }));
});
