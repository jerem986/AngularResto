import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Component/auth/auth.component';
import { CategoryComponent } from './Component/adminchild/category/category.component';
import { EspritgusteauComponent } from './Component/espritgusteau/espritgusteau.component';
import { MenumakerComponent } from './Component/menumaker/menumaker.component';
import { RegisterComponent } from './Component/register/register.component';
import { RepasComponent } from './Component/adminchild/repas/repas.component';
import { ReservationComponent } from './Component/reservation/reservation.component';
import { RestoComponent } from './Component/resto/resto.component';
import { AdminGuard } from './Guard/adminGuard/admin.guard';
import { ConnectedGuardGuard } from './Guard/connectedGuard/connected-guard.guard';
import { ResConnectedComponent } from './Component/res-connected/res-connected.component';

const routes: Routes = [
  {path : 'resto', component : RestoComponent},
  {path : 'espritgusteau', component : EspritgusteauComponent},
  {path : 'reservation', canActivate:[ConnectedGuardGuard], component : ReservationComponent},
  {path : 'menumaker',canActivate : [AdminGuard], component : MenumakerComponent, loadChildren: () => import('./Component/adminchild/adminchild.module').then(m => m.AdminchildModule)},
  {path : 'auth', component : AuthComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'resConnected', component : ResConnectedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//{ path : "", component : AcceuilComponent }, --> crée un index avec page d'acceuil , affichage du plat du jour/ prix etc
