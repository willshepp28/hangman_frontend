import { Component, OnInit } from '@angular/core';
import { DecodeTokenService } from '../core/helpers/decodeToken/decode-token.service';
import { GameService } from '../core/services/game/game/game.service';
import { GameStatisticsService } from '../core/services/game/game-statistics/game-statistics.service';
import { UserService } from '../core/services/user/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  username: string;
  gamesPlayed: number;// placeholder for total amount of games a user has played
  gamesWon: number; // placeholder for total amount of games a user has won
  gamesLost: number; // placeholder for total amount of games a user has lost
  gamesCompleted = [];
  token;
  tokenId;



  constructor(
    private decodeToken: DecodeTokenService,
    private gameService: GameService,
    private statisticService: GameStatisticsService,
    private userService: UserService
  ) { }

  ngOnInit() {

    // we need to get the user name
    this.token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    this.tokenId = this.token.user[0].id;

    // gets the username
    this.userService.getUser(this.tokenId)
      .subscribe(
        response => { console.log(response), this.username = response[0].username; },
        error => { console.log(error); }
      );


    // gets all the info on games a user has completed
    this.gameService.getGamesCompleted()
        .subscribe(
          response => { console.log(response), this.gamesCompleted = response; }
        );

    // get all the games a user has played
    this.statisticService.getGamesPlayed()
      .subscribe(
        response => { this.gamesPlayed = response[0].count; },
        error => console.log(error)
      );


    // get all the games a user has won
    this.statisticService.getGamesWon()
      .subscribe(
        response => { console.log(response ), this.gamesWon = response[0].count; },
        error => console.log(error)
      );


    // get all the games a user has lost
    this.statisticService.getGamesLost()
      .subscribe(
        response => { this.gamesLost = response[0].count; },
        error => console.log(error)
      );
  }

}
