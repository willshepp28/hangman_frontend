import { Injectable } from '@angular/core';


/**
 *
 *   This service is used to set up word display on home page
 *
 */

@Injectable({
  providedIn: 'root'
})
export class WordDisplayService {

  constructor() { }

  setupWordDisplay(amount, array){
    for(let i = 0; i < amount; i++) {
      array.push("-");
    }
  }
}
