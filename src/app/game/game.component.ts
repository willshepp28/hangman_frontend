import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../core/services/game/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameInfo: any[];
  wordMatchDisplay = [];
  id;

  constructor(
    private route: ActivatedRoute,
    private game: GameService
  ) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {

          this.id = (params.get('id'));

          this.game.getGame(this.id)
            .subscribe(
              response => {
                this.gameInfo = response;
                console.log(response);
                this.createLines(response.wordLength, this.wordMatchDisplay);
                console.log(this.wordMatchDisplay);
                console.log(this.gameInfo);
              },
              error => console.log(error)
            );
        }
      );
  }


  // creates wordMatch display
  createLines(amount, array){

    for(let i = 0; i < amount; i++) {
      array.push("-");
    }
  }

}
