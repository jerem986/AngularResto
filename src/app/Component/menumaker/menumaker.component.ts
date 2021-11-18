import { Component, OnInit } from '@angular/core';
import { Redirect } from '../../Model/Redirect.model';
import { CategoryComponent } from '../adminchild/category/category.component';

@Component({
  selector: 'app-menumaker',
  templateUrl: './menumaker.component.html',
  styleUrls: ['./menumaker.component.scss']
})
export class MenumakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
