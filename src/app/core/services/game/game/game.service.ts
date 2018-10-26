import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = "http://localhost:3000/api/v1/game/";

  constructor(private http: HttpClient) { }

/*
|--------------------------------------------------------------------------
| GET - the data on the games the user has played and completed
|--------------------------------------------------------------------------
*/
getGamesCompleted(){
  return this.http.get<any>(this.url + "notComplete");
}



/*
|--------------------------------------------------------------------------
| POST - to create a new game
|--------------------------------------------------------------------------
*/
createGame(userId) {
  const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  return this.http.post<any>(this.url + "create", userId,
  {
    headers: httpHeaders,
    observe: 'response'
  });
}



/*
|--------------------------------------------------------------------------
| GET - gets a game by id
|--------------------------------------------------------------------------
*/
getGame(gameId) {
  console.log(gameId);
  return this.http.get<any>(`${this.url}${gameId}`);
}




/*
|--------------------------------------------------------------------------
| POST - where inputs news words to the specific game
|--------------------------------------------------------------------------
*/
addWordToGame(postId, data) {
  return this.http.post<any>(`${this.url}addWord/${postId}`, data);
}

}


