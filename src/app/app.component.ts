import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Redirect } from './Model/Redirect.model';
import { Reservation } from './Model/Reservation.model';
import { ReservationService } from './Service/Reservation/reservation.service';
import { SessionService } from './Service/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService]
})
export class AppComponent {

  title = 'Restaurant Gusteau';
  name! : string | undefined
  userLevel!: string | undefined
  display : boolean = false
  buttonVisible : boolean = false

  items!: MenuItem[];

  ListReservation! : Reservation[]
  tempValue!: Date
  yesterday: Date = new Date() 
  statuts: string[] = ["En attente", "Confirmé"]

  RedirectToResto : Redirect = { title : 'Restaurant Chez Gusteau', url : 'resto'}
  RedirectToEspritGusteau : Redirect = { title : 'L\'esprit Gusteau', url : 'espritgusteau'}
  RedirectToReservation : Redirect = { title : 'Réservation', url : 'reservation'}
  RedirectToMenuMaker : Redirect = { title : 'Gestion Admin', url : 'menumaker'}
  RedirectToCarte : Redirect = { title : 'Carte', url : 'carte'}


  constructor(
    public _session : SessionService,
    private _route : Router,
    private _reservationService : ReservationService,
    private _confirmationService : ConfirmationService,
  ){}
    
ngOnInit() {
    this.yesterday = new Date(this.yesterday.setDate(this.yesterday.getDate()-1))
    this.items = [
        {
            icon: 'pi pi-github ',
            url : 'https://github.com/jerem986/AngularResto'
        },
        {
            icon: 'pi pi-star',
            url : 'https://www.linkedin.com/in/argyropoulos-j%C3%A9r%C3%A9my/'
        },
        {
            icon: 'pi pi-youtube',
            url :'https://www.youtube.com/watch?v=gBV54O9cuI4'
        },
        {
            icon: 'pi pi-facebook',
            url: 'https://www.facebook.com/Disney/posts/10156955856125954'
        },
        {
            icon: 'pi pi-twitter',
            url: 'https://twitter.com/Gusteaus_',
        }
    ];

    this.name = this._session.user?.name
    if(localStorage.getItem('TOKEN')){
        this.buttonVisible = true
    }
    
    this.manualUpdateListReservation()
    
    
}

disconnected(){
    localStorage.removeItem("TOKEN") 
    this.buttonVisible = false
    this.userLevel = undefined
    window.location.reload();
    location.reload()
}

manualUpdateListReservation(){
    this._reservationService.GetReservationById(this._session.user?.id).subscribe(data => {
        this.ListReservation = data
        
    })
}

parseDate(value: Date){
    this.tempValue = new Date(value)
return this.tempValue
}

deleteReservation(id : number){
    this._reservationService.DeleteReservation(id).subscribe(data =>{
    this.manualUpdateListReservation()
    })
}


showConfirm(id : number) {

    this._confirmationService.confirm({
        message: 'Voulez-vous supprimer cette réservation?',
        header: 'Confirmation de la suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.deleteReservation(id)
        },
        reject: () => {
        },
        key: "ConfirmDialog"
    });
}
}
