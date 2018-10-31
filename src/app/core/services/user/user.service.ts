import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/api/v1/user/";
  private url2 = environment.URL + "user/";

  constructor(private http: HttpClient) { }


/*
|--------------------------------------------------------------------------
| GET - gets one user profile data
|--------------------------------------------------------------------------
*/
getUser(userId) {
  return this.http.get<any>(this.url + userId);
}

}
