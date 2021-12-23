import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VBooking } from 'src/app/Model/VBooking.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url : string =environment.urlApi


  constructor(
    private _client : HttpClient
  ) { }

  getVBooking(month : number , years : number) : Observable<VBooking[]>{
    let params = new HttpParams
    params = params.append("month",month)
    params = params.append("years",years)
    return this._client.get<VBooking[]>(this.url + "Reservation/ReservationByMonth", {params} );
  }

}
