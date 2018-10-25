import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameSequenceService {

  constructor(
    private router: Router
  ) { }


beginGame(){
  this.router.navigate(["/game/1"]);
}
}

