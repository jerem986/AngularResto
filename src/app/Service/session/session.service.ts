import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/User.model';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    private _user?: UserModel

    public get user(): UserModel|undefined {
      return this._user;
    }
    
  constructor(
    private _route : Router
  ) {
    let token = localStorage.getItem('TOKEN'); //on récupère le token dans le localstorage, s'il y en a un

    if(token)
    {
      this._user = this.decode(token);   //si on a un token on l'envoi pour le decodage et crée notre user
    }
  }

  start(data: any) {  //start va servir a stoker le token dans le localstorage
    if(data && data.token){
    localStorage.setItem('TOKEN', data.token);
    this._user = this.decode( data.token); // + envoi du token pour être décodé
    localStorage.setItem('Email', this._user.email )
    console.log(data)
  }
}

  stop () {
    localStorage.clear(); // ferme la session ,et donc va vider le localstorage et l'user
    this._user == null;  
    this.user == null;
  }

  private decode(token : string) : UserModel { //permet de décoder le token et d'assigner les infos à user
  var decoded : any = jwt_decode(token);
  return {
    name : decoded.name,
    id : decoded.id,
    email : decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
    // userlevel: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
    userlevel: decoded.userLevel
    }
  }
}
