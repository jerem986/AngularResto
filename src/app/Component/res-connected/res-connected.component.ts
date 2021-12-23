import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { VBooking } from 'src/app/Model/VBooking.model';
import { ReservationService } from 'src/app/Service/Reservation/reservation.service';
import { SessionService } from 'src/app/Service/session/session.service';
import { MinChar } from 'src/app/Validator/MinChar.validator';

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
  //   return this.testVBooking.find(b => b.dateDeRes = this.myFormGroup.controls["date"].value ) 
  // }

  midiHours!: any[];
  NoonHours!: any[];
  totalAvalaible?:number

  tempVbooking? : VBooking
  

  items!: MenuItem[]
  switchSteps : number = 0

  username? : string  = this._session.user?.name

  myFormGroup : FormGroup = this._formbuild.group({
  })


  today = new Date()
  monthNumber! : number
  month! : string 


  testVBooking! : VBooking[];


  constructor(
    private _formbuild :FormBuilder,
    private _session : SessionService,
    private _reser : ReservationService,
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
    this._reser.getVBooking(12,2021).subscribe(data => this.testVBooking = data)

    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
    this.myFormGroup = this._formbuild.group({
      id : this._session.user?.id,
      nbPers : [null, [Validators.required]],
      date: [null, [Validators.required]],
      service: [null, [Validators.required]],
      heure:[null, [Validators.required]]
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
    console.log(42);
    
  }

//   refreshDate(){
//     // console.log((this.myFormGroup.value.date).getDate());
//     // console.log((this.testVBooking));
//     //console.log(this.myFormGroup.value.service);
//     // console.log(this.myFormGroup.get('date'));
//     // console.log(this.myFormGroup.controls['date'].value);
//     this.testVBooking.map(b => new Date(b.dateDeRes))
//     console.log(42);
    
//     console.log(this.testVBooking);
    
//     this.tempVbooking = this.testVBooking.find(b => b.dateDeRes == this.myFormGroup.value.date
//     && b.isNoon == this.myFormGroup.value.service )
// console.log(43);

//     console.log(this.testVBooking);
    
//     console.log(this.tempVbooking);
    
//   }

}


