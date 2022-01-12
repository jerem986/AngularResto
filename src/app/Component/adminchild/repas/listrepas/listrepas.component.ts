import { Component, Input, OnInit } from '@angular/core';
import { RepasDetail } from 'src/app/Model/Repas.model';
import { RepasService } from 'src/app/Service/Repas/repas.service';

@Component({
  selector: 'app-listrepas',
  templateUrl: './listrepas.component.html',
  styleUrls: ['./listrepas.component.scss']
})
export class ListrepasComponent implements OnInit {

  listRepasRecup! : RepasDetail[]

  @Input() set selectlist( id : number){
    this.GetRepasByIdCategory(id)
  }

  constructor(
    private _repService : RepasService
  ) { }

  ngOnInit(): void {
  }
  
  submit(id : number){
    this._repService.DeleteRepas(id).subscribe(data => {
      location.reload()
    })
  }

  GetRepasByIdCategory(id:number){
    this._repService.GetRepasById(id).subscribe((data : RepasDetail[]) =>{
      this.listRepasRecup = data
    })
  }
}
