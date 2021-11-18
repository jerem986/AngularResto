import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepasDetail, RepasModel } from 'src/app/Model/Repas.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private url : string = environment.urlApi+"Repas"

  constructor(
    private _client : HttpClient
  ) { }

  AddRepas ( model : RepasModel) : Observable<number>{
    return this._client.post<number>(this.url , model)
  }

  GetRepas () : Observable<RepasDetail[]>{
    return this._client.get<RepasDetail[]>(this.url)
  }

  DeleteRepas (id : number) : Observable<boolean>{
    return this._client.delete<boolean>(this.url+"/"+id)
  }

  GetRepasById( id : number) : Observable<RepasDetail[]>{
    return this._client.get<RepasDetail[]>(this.url+"/"+id)
  }
}

//si recup par id this.url+"/"+id
