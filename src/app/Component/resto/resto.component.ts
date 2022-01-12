import { Component, OnInit } from '@angular/core';
import { RepasDetail } from 'src/app/Model/Repas.model';
import { RepasService } from 'src/app/Service/Repas/repas.service';
import { Redirect } from '../../Model/Redirect.model';


@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit {

  cars : Redirect[] = [ {title : 'img2', url : '../../assets/plats/Photo076sur109.jpg'},
  { title : 'img2' , url :"../../assets/plats/Photo081sur109.jpg" },
  { title : 'img2' , url :"../../assets/plats/Photo082sur109.jpg" },
  { title : 'img2' , url :"../../assets/plats/Photo083sur109.jpg" },
  { title : 'img2' , url :"../../assets/plats/Photo086sur109.jpg" },
]
  listRepas! : RepasDetail[] 
  today: Date = new Date()

  constructor(
    private readonly _repService : RepasService
  ) { }

  ngOnInit(): void {
    this._repService.GetRepasById(9).subscribe((data : RepasDetail[]) =>{
      this.listRepas = data
      console.log(this.listRepas);
      
    })
  }

}
