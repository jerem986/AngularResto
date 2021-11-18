import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminchildRoutingModule } from './adminchild-routing.module';
import { MenudujourComponent } from './menudujour/menudujour.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import { ListrepasComponent } from './repas/listrepas/listrepas.component';


@NgModule({
  declarations: [
    MenudujourComponent,
  ],
  imports: [
    CommonModule,
    AdminchildRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    
  ]
})
export class AdminchildModule { }
