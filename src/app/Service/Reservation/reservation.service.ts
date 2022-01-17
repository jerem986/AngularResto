import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation, ReservationGestion } from 'src/app/Model/Reservation.model';
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

  AddReservation(model : Reservation) : Observable<number>{
    return this._client.post<number>(this.url + "Reservation" , model )
  }

  GetReservationById(id : number | undefined) : Observable<Reservation[]>{
    return this._client.get<Reservation[]>(this.url + "Reservation/ReservationByIdClient " +id )
  }

  DeleteReservation(id : number) : Observable<boolean>{
    return this._client.delete<boolean>(this.url + "Reservation/" + id)
  }

  GetReservationByDate(date : string) : Observable<ReservationGestion[]>{
    return this._client.get<ReservationGestion[]>(this.url + "Reservation/ReservationByDate/" + date)
  }

  UpdateReservation(model : Reservation) : Observable<boolean> {
    return this._client.put<boolean>(this.url + "Reservation" , model)
  }
}
