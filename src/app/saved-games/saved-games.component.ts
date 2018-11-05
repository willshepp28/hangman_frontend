import { Component, OnInit } from '@angular/core';
import { SavedGamesService } from '../core/services/game/saved-games/saved-games.service';

@Component({
  selector: 'app-saved-games',
  templateUrl: './saved-games.component.html',
  styleUrls: ['./saved-games.component.css']
})
export class SavedGamesComponent implements OnInit {

  games = [];

  constructor(
    private savedGameService: SavedGamesService
  ) { }

  ngOnInit() {
    this.savedGameService.getSavedGames()
      .subscribe(
        response => { console.log(response); this.games = response;},
        error => { console.log(error);}
      );
  }


  resumeGame(id){
    console.log(id);
  }



  forfeitGame(id){
    console.log(id);
  }

}
