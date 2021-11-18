import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  // visibleSidebar2!:boolean
// fonctionnelle, adaptation icon connection réservation?

  constructor(
    private _route  : Router
  ) { }

  ngOnInit(): void {
  }

  redirect(){
    this._route.navigate(['auth'])
  }

}
