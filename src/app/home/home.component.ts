import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

    // we need to get the user name
    this.token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    this.tokenId = this.token.user[0].id;

    this.userService.getUser(this.tokenId)
      .subscribe(
        response => { console.log(response), this.username = response[0].username; },
        error => { console.log(error);}
      );
  }


startGame(){
  // redirects user to the game page
  this.gameService.createGame({tokenId: this.tokenId})
    .subscribe(
      response => {
        this.game = response.body;
        this.router.navigate([`game/${response.body.gameId}`]);
      },
      error => console.log(error)
    );
}


}
