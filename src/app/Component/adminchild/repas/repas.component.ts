import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryDetail } from 'src/app/Model/Category.model';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { RepasService } from 'src/app/Service/Repas/repas.service';
import { MinChar } from 'src/app/Validator/MinChar.validator';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss']
})
export class RepasComponent implements OnInit {

  myFormGroup : FormGroup = this._formBuild.group({})
  listCategory! : CategoryDetail[]
  varForList! : number

  constructor(
    private _formBuild : FormBuilder,
    private _catService : CategoryService,
    private _repService : RepasService,
    private _route : Router,
  ) {
    this.allCategory();
  }

  ngOnInit(): void {
    this.myFormGroup = this._formBuild.group({
      categoryId : [null, [Validators.required]],
      Plat : [null, [Validators.required, MinChar(2), Validators.maxLength(255)]],
      Description : [null, [Validators.required, MinChar(2), Validators.maxLength(255)]],
      Prix : [null, [Validators.required]],
    }, Validators.required)
    if(this.varForList){

      this._route.navigate(['listerepas/', this.varForList])
    }
  }

  submit(){
    this._repService.AddRepas(this.myFormGroup.value).subscribe(data =>{
      console.log("ajout ok ^^");
    })

  }

  allCategory(){
    this._catService.GetCategory().subscribe(data => this.listCategory = data)
  }
}
