import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
