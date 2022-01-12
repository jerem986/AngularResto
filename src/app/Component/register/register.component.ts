import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MinChar } from 'src/app/Validator/MinChar.validator';
import { WebapiService } from '../../Service/webApi/webapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  myFormGroup : FormGroup = this._formBuild.group({})

  constructor(
    private _formBuild : FormBuilder,
    private _webApi : WebapiService,
    private _route : Router,
    private _messageService : MessageService
  ) { }

  ngOnInit(): void {
    this.myFormGroup = this._formBuild.group({
      name : [null, [Validators.required, MinChar(2),Validators.maxLength(255)]],
      tel : [null,[Validators.required,MinChar(9),Validators.maxLength(20),]], // regex number? ou + en premiere place?
      email : [null,[Validators.required, Validators.email]],
      password : [null, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{6,}$")] //regex minimum 6 lettres dont une Uppercase ,une Lowercase et un caractère spécial
    }, Validators.required)
  }

  submit(){
    this._webApi.AddRegister(this.myFormGroup.value).subscribe(data => {
      if(data){
        console.log("welcome onboard")
        this._messageService.add({severity : 'success', summary: 'Bienvenue', detail:'Bienvenue chez Gusteau', key : 'valid',styleClass : 'p-button-success p-button-raised p-button-rounded'})
        // console.log("félicitations vous êtes connecté")
      }
      else
      console.log("pas de data mais client généré -->debug")
    }, error => {this._messageService.add({severity : 'error', summary: 'rééssayer',key : 'notValid',detail:'Vos données sont invalides, veuillez vérifier vos informations',styleClass : 'p-button-danger p-button-raised p-button-rounded'})
    });
}

onConfirm(){
  this._route.navigate(['auth'])  
}

cancel(){
this._messageService.clear()
}

}