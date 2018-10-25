import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameSequenceService {

  body = [];

  constructor(
    private router: Router,
    private gameService: GameService
  ) { }


beginGame(userId){



  this.gameService.createGame(userId)
    .subscribe(
      response => {
         console.log(response.body);
         this.body = response.body;
      },
      error => console.log(error)
    );

    return this.body;


}
}

