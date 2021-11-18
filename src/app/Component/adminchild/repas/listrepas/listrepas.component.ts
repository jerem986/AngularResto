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
    this._repService.GetRepasById(id).subscribe((data : RepasDetail[]) =>{
      this.listRepasRecup = data,
      console.log(this.listRepasRecup);
      
    })
  }

  constructor(
    private _repService : RepasService
  ) { }

  ngOnInit(): void {
  }

}
