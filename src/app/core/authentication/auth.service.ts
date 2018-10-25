import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient, private router: Router) { }


/*
|--------------------------------------------------------------------------
| POST - to signup user
|--------------------------------------------------------------------------
*/
register(credentials) {
  return this.http.post<any>(this.url + "signup", credentials);
}

/*
|--------------------------------------------------------------------------
| POST - to login user
|--------------------------------------------------------------------------
*/
login(credentials) {
  return this.http.post<any>(this.url + "login", credentials);
}




/*
|--------------------------------------------------------------------------
| Logs out the current user
|--------------------------------------------------------------------------
*/
  logout() {
    localStorage.removeItem('id');
    this.router.navigate(["/login"]);
  }
}
