import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game/game/game.service';

@Injectable({
  providedIn: 'root'
})
export class GameStatusGuard implements CanActivate {


  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      /**
       *  This guard is used to block a user from playing a game is the isComplete is true
       */
    return true;
  }
}
