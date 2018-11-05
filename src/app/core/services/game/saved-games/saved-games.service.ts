import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavedGamesService {

   private url = "http://localhost:3000/api/v1/game-saved/";
   private url2 = "https://hangman-backend.herokuapp.com/api/v1/game-saved/";

  constructor(
    private http: HttpClient
  ) { }

/*
|--------------------------------------------------------------------------
| GET - gets all the game games the user has incompleted
|--------------------------------------------------------------------------
*/
  getSavedGames() {
    return this.http.get<any>(this.url);
  }

/*
|--------------------------------------------------------------------------
| POST - used when users want to forfeit a game
|--------------------------------------------------------------------------
*/
// postForfeitGame(gameId){
//   return this.http.post<any>(this.url + `forfeit/${gameId}`);
// }

}
