import { Component, OnInit } from '@angular/core';
import { DecodeTokenService } from '../core/helpers/decodeToken/decode-token.service';
import { GameService } from '../core/services/game/game/game.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private decodeToken: DecodeTokenService,
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

}
