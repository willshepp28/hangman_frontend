import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameStatisticsService {

  private url = "https://hangman-backend.herokuapp.com/api/v1/gameStats/";
  // private url2 = "https://localhost:3000/api/v1/gameStats";

  constructor(
    private http: HttpClient
  ) { }




/*
|--------------------------------------------------------------------------
| GET - the amount of games a user has played
|--------------------------------------------------------------------------
*/
getGamesPlayed(){
  return this.http.get<any>(this.url + "/amount/played");
}


/*
|--------------------------------------------------------------------------
| GET - get the amount of games a user has won
|--------------------------------------------------------------------------
*/
getGamesWon(){
  return this.http.get<any>(this.url + "/amount/won");
}


/*
|--------------------------------------------------------------------------
| GET - get the amount of games a use has lost
|--------------------------------------------------------------------------
*/
getGamesLost(){
  return this.http.get<any>(this.url + "/amount/lost");
}



}
