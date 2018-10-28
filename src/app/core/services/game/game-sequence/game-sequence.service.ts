import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game/game.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameSequenceService {
  private url = "http://localhost:3000/api/v1/sequence/";


  constructor(
    private router: Router,
    private http: HttpClient,
    private gameService: GameService
  ) { }



/*
|--------------------------------------------------------------------------
| POST - updates the game.status to "lost" and game.isComplete = true
|  * used when the player had made 10 incorrect attempts
|--------------------------------------------------------------------------
*/
playerLost(gameId) {
  return this.http.post<any>(this.url + "lost", gameId);
}


/*
|--------------------------------------------------------------------------
| POST - updates the game.status to "lost" and game.isComplete = true
|  * used when the player had made 10 incorrect attempts
|--------------------------------------------------------------------------
*/
playerWon(gameId) {
  return this.http.post<any>(this.url + "won", gameId);
}


}

