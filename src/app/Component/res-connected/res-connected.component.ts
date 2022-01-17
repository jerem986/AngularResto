import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { VBooking } from 'src/app/Model/VBooking.model';
import { ReservationService } from 'src/app/Service/Reservation/reservation.service';
import { SessionService } from 'src/app/Service/session/session.service';

@Component({
  selector: 'app-res-connected',
  templateUrl: './res-connected.component.html',
  styleUrls: ['./res-connected.component.scss']
})
export class ResConnectedComponent implements OnInit {


  get invalidDates() {
    return this.testVBooking?.filter(b => b.total + this.myFormGroup.controls["nbPers"].value > 30 && b.isNoon == this.myFormGroup.value.service )  //ajout filtre / total salle perso + reser
      .map(b => new Date(b.dateDeRes)) ?? [];
      
    }
    
  //   get availablePlace(){
  //   return this.testVBooking.find(b => b.dateDeRes = this.myFormGroup.controls["DateDeRes"].value ) 
  // }

  midiHours!: any[];
  NoonHours!: any[];
  totalAvalaible?:number
  HoursValue : string[] = ["12h00", "12h30", "13h00", "13h30", "18h00", "18h30", "19h00", "19h30", "20h00"]

  tempVbooking? : VBooking
  

  items!: MenuItem[]
  switchSteps : number = 0

  username? : string  = this._session.user?.name

  myFormGroup : FormGroup = this._formbuild.group({
  })


  today = new Date()
  monthNumber! : number
  yearNumber! : number 


  testVBooking! : VBooking[];


  constructor(
    private _formbuild :FormBuilder,
    private _session : SessionService,
    private _reser : ReservationService,
    private _route : Router
  ) 
  {
      this.midiHours = [
      { name:"12h00", value : 1 },
      { name:"12h30", value : 2 },
      { name:"13h00", value : 3 },
      { name:"13h30", value : 4 }
    ],
    this.NoonHours = [
      { name:"18h00", value : 5 },
      { name:"18h30", value : 6 },
      { name:"19h00", value : 7 },
      { name:"19h30", value : 8 },
      { name:"20h00", value : 9 }
    ]
  }

  ngOnInit(): void {

    this.GetVBooking({month :this.today.getMonth()+1, year : this.today.getFullYear()})

    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
    this.myFormGroup = this._formbuild.group({
      IdClient : this._session.user?.id,
      nbPers : [null, [Validators.required]],
      DateDeRes: [null, [Validators.required]],
      service: [null, [Validators.required]],
      Horaire:[null, [Validators.required]]
    }, Validators.required)
    
  }

  next(){
    this.switchSteps +=1 

  }

  previous(){
    if(this.switchSteps>=1)
    this.switchSteps-=1
  }

  AddReservation(){
    this._reser.AddReservation(this.myFormGroup.value).subscribe(data => {
      this._route.navigate(['resto'])
    })
  }

  GetVBooking(e:any){
    this._reser.getVBooking(e.month, e.year).subscribe(data => this.testVBooking = data)
  }
}


