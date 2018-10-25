import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Services
import { DecodeTokenService } from '../core/helpers/decodeToken/decode-token.service';
import { UserService } from '../core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;

  constructor(
    private route: ActivatedRoute,
    private decodeToken: DecodeTokenService,
    private userService: UserService
  ) { }

  ngOnInit() {

    // we need to get the user name
    const token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    const tokenId = token.user[0].id;

    console.log(tokenId);

    this.userService.getUser(tokenId)
      .subscribe(
        response => { console.log(response), this.username = response[0].username; },
        error => { console.log(error);}
      );
  }

}
