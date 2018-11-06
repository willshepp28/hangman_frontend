import { Component, OnInit } from '@angular/core';
import { SavedGamesService } from '../core/services/game/saved-games/saved-games.service';
import { Router } from '@angular/router';
import { GameSequenceService } from '../core/services/game/game-sequence/game-sequence.service';

@Component({
  selector: 'app-saved-games',
  templateUrl: './saved-games.component.html',
  styleUrls: ['./saved-games.component.css']
})
export class SavedGamesComponent implements OnInit {

  games = [];

  constructor(
    private savedGameService: SavedGamesService,
    private route: Router,
    private sequenceService: GameSequenceService
  ) { }

  ngOnInit() {
    this.savedGameService.getSavedGames()
      .subscribe(
        response => { console.log(response); this.games = response;},
        error => { console.log(error);}
      );
  }

/*
|--------------------------------------------------------------------------
| Lets user resume a game where they left off
|--------------------------------------------------------------------------
*/
  resumeGame(gameId){
    this.route.navigate([`game/${gameId}`]);
  }




/*
|--------------------------------------------------------------------------
| Lets user forfeit a game, that they havent completed yet.
|--------------------------------------------------------------------------
*/
  forfeitGame(gameId){
    console.log(gameId);
    this.sequenceService.playerLost({id: gameId})
      .subscribe(
        data => {

          // update the saved games
          this.savedGameService.getSavedGames()
          .subscribe(
            response => { console.log(response); this.games = response;},
            error => { console.log(error);}
          );
        },
        error => {console.log(error);}
      );
  }

}
