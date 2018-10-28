import { Injectable, ViewChild, Renderer2, ElementRef  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  @ViewChild("videoPlayer") video: ElementRef;

  videoCurrentTime = [0,4,9,13,18,21,25,28,31,36,40];

  constructor(
    // private renderer: Renderer2,
  ) { }

playVideo(element) {
    element.nativeElement.play();
  }

  pauseVideo(element) {
    element.nativeElement.pause();
  }

}
