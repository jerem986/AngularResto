import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { ListreservationComponent } from './gestion-reservation/listreservation/listreservation.component';
import { MenudujourComponent } from './menudujour/menudujour.component';
import { ListrepasComponent } from './repas/listrepas/listrepas.component';
import { RepasComponent } from './repas/repas.component';

const routes: Routes = [
    {path : 'category', component : CategoryComponent},
    {path : 'repas', component : RepasComponent, children : [{ path : "listrepas" , component : ListrepasComponent}]},
    {path : 'menudujour', component : MenudujourComponent},
    {path : 'gestionReservation', component : GestionReservationComponent, children : [{ path : "listreservation" , component : ListreservationComponent}]},
    // //next child 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminchildRoutingModule { }
