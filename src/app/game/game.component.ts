import { Component, OnInit, DoCheck, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// Services
import { GameService } from '../core/services/game/game/game.service';
import { WordDisplayService } from '../core/helpers/word-display/word-display.service';
import { GameSequenceService } from '../core/services/game/game-sequence/game-sequence.service';
import { Route } from '@angular/compiler/src/core';
import { VideoPlayerService } from '../core/helpers/video-player/video-player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild("videoPlayer") video: ElementRef;

  gameInfo: any[];
  wordForm: FormGroup;
  matchs;
  id;
  submitted = false;
  attempts;
  gameOver = false;
  status;
  videoCurrentTime = [0,4,9,13,18,21,25,28,31,36,40];
  begin;
  end;



  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private game: GameService,
    private wordDisplay: WordDisplayService,
    private sequenceService: GameSequenceService,
    private videoService: VideoPlayerService
  ) { }

  ngOnInit() {
    this.renderer.setProperty(this.video.nativeElement, "currentTime", 0.2); // starts the video at 0

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
                console.log(response);
                this.gameInfo = response;
                this.attempts = response.attempts;
                this.matchs = response.matchs;
                this.status = response.status;

                console.log(response.status);

                // if the user already won, we set gameOver to true, and status to won
                if (this.status === "won") {
                  this.gameOver = true;
                  this.status = response.status;
                }

                // if the user already made 10 incorrect attempts we set gameOver to true. And status to lost
                if (this.attempts >= 10) {
                  console.log("Attempts are greater than 10");
                  this.gameOver = true;
                  this.status = response.status;
                }
              },
              error => console.log(error)
            );
        }
      );

  }

  videoTimeInterval(startTime, endTime){

    this.end = this.renderer.setProperty(this.video.nativeElement, "currentTime", endTime);
    // We use startTime to know where to start the video
    // while(this.video.nativeElement.currentTime < 50)

    setInterval(() => {
      console.log("yup");
    }, 3000);

    // We get end time to know where to end the video
    console.log(this.video.nativeElement.currentTime);
  }

   /*
  |--------------------------------------------------------------------------
  | This method plays the video element
  |--------------------------------------------------------------------------
  */
  playVideo() {
    this.video.nativeElement.play();
  }

   /*
  |--------------------------------------------------------------------------
  | This method pauses the video element
  |--------------------------------------------------------------------------
  */
  pauseVideo() {
    this.video.nativeElement.pause();
  }

  /*
  |--------------------------------------------------------------------------
  | Gets us access to form fields
  |--------------------------------------------------------------------------
  */
  get getFormControls() { return this.wordForm.controls; }


  /*
  |--------------------------------------------------------------------------
  | Sets up the match display
  |--------------------------------------------------------------------------
  */
  intialSetup(amount, array) {
    this.wordDisplay.setupWordDisplay(amount, array);
  }

  /*
  |--------------------------------------------------------------------------
  | Resets the values in the form
  |--------------------------------------------------------------------------
  */
  reset() {
    this.wordForm.reset();
  }



  /*
  |--------------------------------------------------------------------------
  | Submits input value when user presses submit
  |--------------------------------------------------------------------------
  */
  onSubmit() {
    console.clear();
    this.submitted = true;
    // stop here if form is invalid
    if (this.wordForm.invalid) {
      return;
    }

    // make a service that updates the databse stirng
    this.game.addWordToGame(this.id, this.wordForm.value)
      .subscribe(
        response => {

          this.wordForm.reset(); // resets the form after user submits
          this.submitted = false;




          setTimeout(() => {

            // We run this to get the updated word matchs and attempts
            this.game.getGame(this.id)
              .subscribe(
                data => {
                  this.matchs = data.matchs;
                  this.attempts = data.attempts;
                  this.status = data.status;



                  // if the user already won, we set gameOver to true, and status to won
                  if (this.status === "won") {
                    this.gameOver = true;
                  }
                  // We run this if the user already made 10 attempts
                  if (this.attempts >= 10) {

                    /**
                     * We run this if the user has already made 10 attempts but the status is still pending
                     *    - we run this query to update the status to lost , and the isComplete property to true
                     */
                    if (this.status === "pending") {
                      console.log("in pending");
                      this.sequenceService.playerLost({ id: this.id })
                        .subscribe(
                          gameData => {
                            this.status = gameData[0];
                            this.gameOver = true;
                          },
                          error => { console.log(error); }
                        );
                    }
                    else {
                      console.log("You already made 10 attempts. The game is over");
                      this.status = data[0].status;
                      this.gameOver = true;
                    }
                  }
                },
                error => console.log(error)
              );

          }, 1000);
        },
        error => { console.log(error); }
      );
  }


}
