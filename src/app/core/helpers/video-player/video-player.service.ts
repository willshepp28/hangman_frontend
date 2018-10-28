import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  timeIntervals = [0];

  constructor() { }
}
