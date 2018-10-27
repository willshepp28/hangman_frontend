import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Services
import { GameService } from '../core/services/game/game/game.service';
import { WordDisplayService } from '../core/helpers/word-display/word-display.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameInfo: any[];
  wordForm: FormGroup;
  matchs;
  id;
  submitted = false;
  attempts;
  gameOver = false;
  status: string;




  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private game: GameService,
    private wordDisplay: WordDisplayService
  ) { }

  ngOnInit() {

    this.wordForm = this.formBuilder.group({
      guess: ["", [Validators.required, Validators.maxLength(1)]]
    });

    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {

          this.id = (params.get('id'));

          this.game.getGame(this.id)
            .subscribe(
              response => {
                this.gameInfo = response;
                this.attempts = response.attempts;
                this.matchs = response.matchs;

                if(this.attempts >= 10) {
                  console.log("Attempts are greater than 10");
                  this.gameOver = true;
                }
              },
              error => console.log(error)
            );
        }
      );

      console.log(this.gameInfo);
  }




   // convenience getter for easy access to form fields
   get getFormControls() { return this.wordForm.controls; }


  intialSetup(amount, array) {
    this.wordDisplay.setupWordDisplay(amount,array);
  }


  reset(){
    this.wordForm.reset();
  }

  onSubmit(){
    this.submitted = true;
     // stop here if form is invalid
     if (this.wordForm.invalid) {
      return;
    }

    // make a service that updates the databse stirng
    this.game.addWordToGame(this.id, this.wordForm.value)
      .subscribe(
        response => {
          console.log("success");
          this.wordForm.reset();
          this.submitted = false;

        this.game.getUpdatedMatchs(this.id)
            .subscribe(
              data => {
                this.matchs = data[0].matchs;
                this.attempts = data[0].attempts;

                if(this.attempts >= 10) {
                  console.log("You already made 10 attempts. The game is over");
                  this.gameOver = true;
                }
              },
              error => console.log(error)
            );
        },
        error => { console.log(error);}
      );
  }


}
