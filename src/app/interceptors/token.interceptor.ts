import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../Service/session/session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private _session : SessionService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {  
    console.log("interceptor : job's done");  
    if(this._session.user != null) {
      let token = localStorage.getItem("TOKEN");
      let clone = request.clone({setHeaders: { "Authorization": "Bearer " + token }});
      return next.handle(clone);
    }
    return next.handle(request);
  }
}


// si une session existe(if) -> on récupère le token et on l'ajoute dans la request avant l'envoi de l'information dans l'API.