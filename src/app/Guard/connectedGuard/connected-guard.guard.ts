import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/Service/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuardGuard implements CanActivate {

  constructor(
    private _session: SessionService,
    private _route: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._session.user)
      return this._route.navigate(['resConnected']);
    else
      return true;
  }
  
}
