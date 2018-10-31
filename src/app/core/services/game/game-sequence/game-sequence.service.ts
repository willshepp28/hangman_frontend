import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GameSequenceService {

  private url = "http://localhost:3000/api/v1/sequence";
  private url2 = environment.URL + "sequence/";


  constructor(
    private http: HttpClient,
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

