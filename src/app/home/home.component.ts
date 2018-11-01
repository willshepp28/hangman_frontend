import { Component, OnInit, isDevMode } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from "../../environments/environment";

// Services
import { DecodeTokenService } from '../core/helpers/decodeToken/decode-token.service';
import { UserService } from '../core/services/user/user.service';
import { GameSequenceService } from '../core/services/game/game-sequence/game-sequence.service';
import { GameService } from '../core/services/game/game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  game: any[];
  username: string;
  token;
  tokenId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private decodeToken: DecodeTokenService,
    private userService: UserService,
    private sequenceService: GameSequenceService,
    private gameService: GameService
  ) { }

  ngOnInit() {


 /*
|--------------------------------------------------------------------------
| You get the user id out of the token to make a http request for the user information
|--------------------------------------------------------------------------
*/
    this.token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token')); // gets the token
    console.log(this.token);
    this.tokenId = this.token.user[0].id || this.token.user.id; // gets the user id out of the token

    this.userService.getUser(this.tokenId)
      .subscribe(
        response => { console.log(response), this.username = response[0].username; },
        error => { console.log(error); }
      );
  }

  /*
  |--------------------------------------------------------------------------
  | Starts the game once the user presses the button
  |--------------------------------------------------------------------------
  */
  startGame() {
    // redirects user to the game page
    this.gameService.createGame({ tokenId: this.tokenId })
      .subscribe(
        response => {
          this.game = response.body;
          this.router.navigate([`game/${response.body.gameId}`]);
        },
        error => console.log(error)
      );
  }


}
