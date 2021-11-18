import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../Service/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(
    private _session: SessionService,
    private _route: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._session.user?.userlevel == 'ADMIN') {
        return true;
      }
      this._route.navigateByUrl('');
      return false;
  }
    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //   return true;
    // }
   
  //possibilité d'activer une garde avec plusieurs fonction? -->oui 
  //affiché un menu supplémentaire par exemple dans le menu du début? --> child?
}
