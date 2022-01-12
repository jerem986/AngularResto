import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminchildRoutingModule } from './adminchild-routing.module';
import { MenudujourComponent } from './menudujour/menudujour.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { ListreservationComponent } from './gestion-reservation/listreservation/listreservation.component';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    MenudujourComponent,
    GestionReservationComponent,
    ListreservationComponent,
  ],
  imports: [
    CommonModule,
    AdminchildRoutingModule,
    CardModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    CalendarModule,
    ToggleButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class AdminchildModule { }
