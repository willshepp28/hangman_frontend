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


  resumeGame(gameId){
    this.route.navigate([`game/${gameId}`]);
  }



  forfeitGame(gameId){
    console.log(gameId);
    this.sequenceService.playerLost({id: gameId})
      .subscribe(
        response => { console.log(response);},
        error => {console.log(error);}
      );
  }

}
