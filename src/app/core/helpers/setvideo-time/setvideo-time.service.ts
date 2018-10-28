import { Injectable, Renderer2 } from '@angular/core';


/**
 *
 *   This service is sets the video.currentTime
 *
 *  Its moves the video along based on the a users incorrect attempts
 *
 */


@Injectable({
  providedIn: 'root'
})
export class SetvideoTimeService {

  constructor(
    ) { }


  setVideoTimes(attempts, videoTimeInterval,element, render){
    console.log(element);
    switch(attempts) {
        default:
            videoTimeInterval(0,0,element, render);
              break;
          case 1:
              videoTimeInterval(0,4, element, render);
              break;
           case 2:
              videoTimeInterval(4,9, element,render);
              break;
           case 3:
              videoTimeInterval(9,13, element,render);
              break;
           case 4:
              videoTimeInterval(13,18, element,render);
            break;
           case 5:
            videoTimeInterval(18,21, element,render);
            break;
           case 6:
                videoTimeInterval(21,25, element,render);
              break;
           case 7:
              videoTimeInterval(25,28, element,render);
              break;
           case 8:
              videoTimeInterval(28,31,element,render);
              break;
           case 9:
              videoTimeInterval(31,36, element,render);
            break;
           case 10:
              videoTimeInterval(36,38, element,render);
              break;
  }
}

}
