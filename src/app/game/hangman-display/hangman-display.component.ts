import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements AfterViewInit, OnChanges {

  @ViewChild("canvas") public canvas: ElementRef;
  @Input() public width: 350;
  @Input() public height: 350;

  @Input() public attempts: number;

  // public attempts: number;
  private context: CanvasRenderingContext2D;

  // Variables for gallow
  private bottomGallow;
  private middleGallow;
  private topGallow;
  private gallowDrop;

  // Variables for hangman
  private head;
  private torso;
  private rightArm;
  private leftArm;
  private rightLeg;
  private leftLeg;


  constructor() { }

  ngAfterViewInit() {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasElement.getContext("2d");

    canvasElement.width = 350;
    canvasElement.height = 350;
  }


  ngOnChanges() {


    switch (this.attempts) {
      case 10:
        this.leftLeg = this.setcoordinates(110, 185, 130, 206);
      case 9:
        this.rightLeg = this.setcoordinates(110, 185, 89, 205);
      case 8:
        this.leftArm = this.setcoordinates(130, 160, 110, 160);
      case 7:
        this.rightArm = this.setcoordinates(86, 160, 120, 160);
      case 6:
        this.torso = this.setcoordinates(110, 137, 110, 188);
      case 5:
        this.head = this.setCircle(110, 123, 15);
      case 4:
        this.gallowDrop = this.setcoordinates(110, 60, 110, 108);
      case 3:
        this.topGallow = this.setcoordinates(107, 60, 178, 60);
      case 2:
        this.middleGallow = this.setcoordinates(175, 275, 175, 60);
      case 1:
        this.bottomGallow = this.setcoordinates(120, 275, 225, 275);


    }


  }








  /*
  |--------------------------------------------------------------------------
  | Creates a circle and sets the coordinates
  |--------------------------------------------------------------------------
  */
  setCircle(xAxis, yAxis, radius) {
    this.context.beginPath();
    this.context.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
    this.context.stroke();
  }




  /*
  |--------------------------------------------------------------------------
  | Sets the coordinates of the lines
  |--------------------------------------------------------------------------
  */
  setcoordinates(moveStart, moveEnd, lineStart, lineEnd) {
    this.context.beginPath();
    this.context.moveTo(moveStart, moveEnd);
    this.context.lineTo(lineStart, lineEnd);
    this.context.lineWidth = 5;
    this.context.strokeStyle = "black";
    this.context.stroke();
  }




}
