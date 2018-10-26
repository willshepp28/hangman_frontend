import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';
import { DecodeTokenService } from './core/helpers/decodeToken/decode-token.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  token;
  userId;

  constructor(
    private decodeToken: DecodeTokenService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // we need to get the user name
    this.token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    this.userId = this.token.user[0].id;
  }


  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout();
  }
}
