import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.scss']
})
export class GestionReservationComponent implements OnInit {

  today: Date = new Date()
  sendDate: Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
