import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Redirect } from 'src/app/Model/Redirect.model';
import { RepasDetail } from 'src/app/Model/Repas.model';
import { RepasService } from 'src/app/Service/Repas/repas.service';
import { MinChar } from 'src/app/Validator/MinChar.validator';

@Component({
  selector: 'app-menudujour',
  templateUrl: './menudujour.component.html',
  styleUrls: ['./menudujour.component.scss']
})
export class MenudujourComponent implements OnInit {

  listRepas!: RepasDetail[]
  jour: string[] = ["Lundi", "Mardi", "Mercredi" , "Jeudi" , "Vendredi", "Samedi", "Dimanche"]
  displayModal: boolean = false;
  repasEdit!:RepasDetail
  myFormGroup : FormGroup = this._formBuild.group({})

  constructor(
    private _repService : RepasService,
    private _formBuild : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.GetRepasByCategoryID()
    
    this.myFormGroup = this._formBuild.group({
      plat : [null , [Validators.required, MinChar(2), Validators.maxLength(255)]],
      description : [null , [Validators.required, MinChar(2), Validators.maxLength(255)]],
      prix : [null, [Validators.required]],

    }, Validators.required)


    
  }

  submit(){
    this.repasEdit.plat = this.myFormGroup.controls['plat'].value
    this.repasEdit.description = this.myFormGroup.controls['description'].value
    this.repasEdit.prix = this.myFormGroup.controls['prix'].value    
    this._repService.EditRepas(this.repasEdit).subscribe()
    this.GetRepasByCategoryID
    this.displayModal = false;
  }

  showModalDialog(i : number) {
    this.repasEdit = this.listRepas[i]
    this.myFormGroup.patchValue(this.repasEdit) //va mettre les valeurs dans le formgroup
    this.displayModal = true;
}

cancel(){
  this.displayModal = false;
}

GetRepasByCategoryID(){
  this._repService.GetRepasById(9).subscribe((data : RepasDetail[]) =>{
    this.listRepas = data
  })
}
}
