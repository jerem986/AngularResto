import { Component, Input, OnInit } from '@angular/core';
import { Reservation, ReservationGestion } from 'src/app/Model/Reservation.model';
import { ReservationService } from 'src/app/Service/Reservation/reservation.service';

@Component({
  selector: 'app-listreservation',
  templateUrl: './listreservation.component.html',
  styleUrls: ['./listreservation.component.scss']
})
export class ListreservationComponent implements OnInit {

  changeValidationStatuts: boolean = true
  clock: string = "pi pi-clock"
  onLabel : string = "Réservation en attente"

  ListReservation!: ReservationGestion[]
  stringDate: string = ""
  HoursValue : string[] = ["12h00", "12h30", "13h00", "13h30", "18h00", "18h30", "19h00", "19h30", "20h00"]
  
  @Input() set selectDate(date : Date){
    this.stringDate = date.getMonth()+1  + "-" + date.getDate() + "-" + date.getFullYear()
    this._reservationService.GetReservationByDate(this.stringDate).subscribe((data : ReservationGestion[]) =>{
      this.ListReservation = data
    })
  }

  constructor(
    private _reservationService : ReservationService
  ) { }

  ngOnInit(): void {
  }

  Validate(reservation : ReservationGestion){
    reservation.validationStatuts = 1
    console.log(reservation);
    
    this._reservationService.UpdateReservation(reservation).subscribe(
   //() => {
    //   // toast vert
    // }, error => {
      
    // }, () => {

    // }
    )
    this.selectDate
  }

  Delete(reservation : ReservationGestion){
    this._reservationService.DeleteReservation(reservation.id).subscribe()
    location.reload()
  }
}
