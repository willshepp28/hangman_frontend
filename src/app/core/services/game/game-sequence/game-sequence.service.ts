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


// We need to make a http request when the user either makes 10 attempts or when the user gueses all words correctly
/*
|--------------------------------------------------------------------------
| POST - updates the game.status to "lost" and game.isComplete = true
|  * used when the player had made 10 incorrect attempts
|--------------------------------------------------------------------------
*/
playerLost(gameId) {
  return this.http.post<any>(this.url + "lost", gameId);
}


}

