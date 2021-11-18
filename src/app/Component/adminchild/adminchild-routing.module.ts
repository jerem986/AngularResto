import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MenudujourComponent } from './menudujour/menudujour.component';
import { ListrepasComponent } from './repas/listrepas/listrepas.component';
import { RepasComponent } from './repas/repas.component';

const routes: Routes = [
    {path : 'category', component : CategoryComponent},
    {path : 'repas', component : RepasComponent, children : [{ path : "listrepas" , component : ListrepasComponent}]},
    {path : 'menudujour', component : MenudujourComponent},
    // //next child 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminchildRoutingModule { }
