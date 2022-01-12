import { Component, OnInit } from '@angular/core';
import { CategoryDetail } from 'src/app/Model/Category.model';
import { RepasDetail } from 'src/app/Model/Repas.model';
import { RepasService } from 'src/app/Service/Repas/repas.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  listRepas!:RepasDetail[]
  listeCategory: CategoryDetail[] = [{id : 1 , type : "Entrée"},{id : 6 , type : "Plat"},{id : 7 , type : "Dessert"}]

  constructor(
    private _repasService : RepasService,
  ) { }

  ngOnInit(): void {
    this._repasService.GetRepas().subscribe(data => {
      this.listRepas = data
      console.log(this.listRepas);

    })

  }

}
