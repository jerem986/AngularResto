import { ThisReceiver } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem,MessageService, PrimeNGConfig } from 'primeng/api';
import { Redirect } from './Model/Redirect.model';
import { SessionService } from './Service/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clientAngular';
  name! : string | undefined
  userLevel!: string | undefined
  display : boolean = false
  buttonVisible : boolean = false

  items!: MenuItem[];

  RedirectToResto : Redirect = { title : 'Restaurant Chez Gusteau', url : 'resto'}
  RedirectToEspritGusteau : Redirect = { title : 'L\'esprit Gusteau', url : 'espritgusteau'}
  RedirectToReservation : Redirect = { title : 'Réservation', url : 'reservation'}
  RedirectToMenuMaker : Redirect = { title : 'Gestion Admin', url : 'menumaker'}


  constructor(
    public _session : SessionService,
    private _route : Router,
  ){}
    
ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-github ',
            command: () => {
                
            }
        },
        {
            icon: 'pi pi-star',
            command: () => {
                
            }
        },
        {
            icon: 'pi pi-youtube',
            command: () => {
                
            }
        },
        {
            icon: 'pi pi-facebook',
            routerLink: ['resto']
        },
        {
            icon: 'pi pi-twitter',
            url: 'http://angular.io',
        }
    ];
    this.name = this._session.user?.name
    if(localStorage.getItem('TOKEN')){
        this.buttonVisible = true
    }
}

disconnected(){
    localStorage.removeItem("TOKEN") 
    this.buttonVisible = false
    this.userLevel = undefined
    window.location.reload();
}

}
