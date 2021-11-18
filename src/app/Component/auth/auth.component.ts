import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SessionService } from '../../Service/session/session.service';
import { WebapiService } from '../../Service/webApi/webapi.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [MessageService]
})
export class AuthComponent implements OnInit {

  emailLocal :string |null

  myFormGroup : FormGroup = this._formBuild.group({})
  

  constructor(   
     private _route : Router,
     private _formBuild : FormBuilder,
     private _webApi : WebapiService,
     private _messageService: MessageService,
     private _session : SessionService
     ){
        this.emailLocal = localStorage.getItem("Email")
      }

  ngOnInit(): void {
    this.myFormGroup = this._formBuild.group({
      email :new FormControl(this.emailLocal, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    })
  }

  Redirect(){
    this._route.navigate(['register'])
  }

  submit(){
      this._webApi.LoginAuth(this.myFormGroup.value).subscribe(data => {
        if(data){
          this._messageService.add({severity : 'success', summary: 'Bienvenue', detail:'connection réussie!!', key : 'valid',styleClass : 'p-button-success p-button-raised p-button-rounded'})
          console.log("félicitations vous êtes connecté")
          this._session.start(data)
        }
        else
        console.log("fail")
      }, error => {this._messageService.add({severity : 'error', summary: 'rééssayer',key : 'notValid',detail:'Votre email et/ou votre mot de passe est invalide',styleClass : 'p-button-danger p-button-raised p-button-rounded'})
      });
  }

  onConfirm(){
      this._route.navigate([''])  
    }

  cancel(){
    this._messageService.clear()
  }
}
