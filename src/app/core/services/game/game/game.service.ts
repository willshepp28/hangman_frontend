import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = "http://localhost:3000/api/v1/game/";

  constructor(private http: HttpClient) { }

createGame(userId) {
  // return this.http.post<any>(this.url, userId);
  const httpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  return this.http.post<any>(this.url + "create", userId,
  {
    headers: httpHeaders,
    observe: 'response'
  });
}

getGame(gameId) {
  console.log(gameId);
  return this.http.get<any>(`${this.url}${gameId}`);
}

}
