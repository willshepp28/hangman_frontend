import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private url = "https://hangman-backend.herokuapp.com/api/v1/";
  // private url = "http://localhost:3000/api/v1/";

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
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }


/*
|--------------------------------------------------------------------------
| Checks to see if user is logged in
| returns true or false based on answer
|--------------------------------------------------------------------------
*/
isLoggedIn() {
  return !!localStorage.getItem("token");
}

/*
|--------------------------------------------------------------------------
| Gets token
|--------------------------------------------------------------------------
*/
getToken() {
  return localStorage.getItem('token');
}

}
