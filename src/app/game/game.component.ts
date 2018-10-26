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

                // console.log(response);
                this.gameInfo = response;
                this.matchs = response.matchs;
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


  onSubmit(){
    this.submitted = true;
     // stop here if form is invalid
     if (this.wordForm.invalid) {
      return;
    }

    console.log(this.wordForm.value);

    // make a service that updates the databse stirng
    this.game.addWordToGame(this.id, this.wordForm.value)
      .subscribe(
        response => {
          console.log("success");
        },
        error => { console.log(error);}
      );
  }


}
