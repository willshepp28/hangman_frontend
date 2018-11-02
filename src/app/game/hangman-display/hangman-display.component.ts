import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements AfterViewInit {

  @ViewChild("canvas") public canvas: ElementRef;
  @Input() public width: 350;
  @Input() public height: 350;
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

 ngAfterViewInit(){
   const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasElement.getContext("2d");

    canvasElement.width = 350;
    canvasElement.height = 350;
 }


/*
|--------------------------------------------------------------------------
| Creates a circle and sets the coordinates
|--------------------------------------------------------------------------
*/
 setCircle(xAxis,yAxis, radius ) {
  this.context.beginPath();
  this.context.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
  this.context.stroke();
}




/*
|--------------------------------------------------------------------------
| Sets the coordinates of the lines
|--------------------------------------------------------------------------
*/
 setcoordinates(moveStart, moveEnd, lineStart, lineEnd){
      this.context.beginPath();
        this.context.moveTo(moveStart, moveEnd);
        this.context.lineTo(lineStart, lineEnd);
        this.context.lineWidth = 5;
        this.context.strokeStyle = "black";
        this.context.stroke();
 }




}
