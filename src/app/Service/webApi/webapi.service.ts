import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel } from '../../Model/Register.model';
import { LoginModel } from '../../Model/Login.model';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  private url : string = environment.urlApi

  constructor(
    private _client : HttpClient
    ) { }

    AddRegister(model : RegisterModel): Observable<number> {
      return this._client.post<number>(this.url+"Auth/Register",model)
    }

    LoginAuth(model : LoginModel): Observable<string> {
      return this._client.post<string>(this.url+"Auth/Login",model)
    }
}
