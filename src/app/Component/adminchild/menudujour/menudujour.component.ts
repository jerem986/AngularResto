import { Component, OnInit } from '@angular/core';
import { Redirect } from 'src/app/Model/Redirect.model';

@Component({
  selector: 'app-menudujour',
  templateUrl: './menudujour.component.html',
  styleUrls: ['./menudujour.component.scss']
})
export class MenudujourComponent implements OnInit {

  value1: Redirect[] = [{title:" number 1", url : "test 1"},
  {title:" number 2", url : "test 2"},
  {title:" number 3", url : "test 3"},
  {title:" number 4", url : "test 4"},
  {title:" number 5", url : "test 5"},
  {title:" number 6", url : "test 6"},
  {title:" number 7", url : "test 7"},];


  constructor() { }

  ngOnInit(): void {
  }

}
