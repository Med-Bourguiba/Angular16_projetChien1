import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiensComponent } from './chiens/chiens.component';
import { AddChienComponent } from './add-chien/add-chien.component';
import { UpdateChienComponent } from './update-chien/update-chien.component';
import { RchercheParRaceComponent } from './rcherche-par-race/rcherche-par-race.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeRacesComponent } from './liste-races/liste-races.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ChienGuard } from './chien.guard';
import {AddRoleForUserComponent} from './add-role/add-role.component';
import { ListeOfusersComponent } from './liste-user/liste-user.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path :"chiens" ,component :ChiensComponent},
{path :"add-chien" ,component :AddChienComponent,canActivate:[ChienGuard]},
{ path: "", redirectTo: "chiens", pathMatch: "full" },
{path:"rchercheParRace",component:RchercheParRaceComponent},
{path:"rechercherParNom",component:RechercherParNomComponent},
{path: "listeRaces", component : ListeRacesComponent},
{path: "listeRoles", component : ListeRolesComponent},
{path: "updateChien/:id", component: UpdateChienComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path:"listeOfusers",component:ListeOfusersComponent,canActivate:[ChienGuard]},
{path:"add-role-for-user/:id",component:AddRoleForUserComponent,canActivate:[ChienGuard]},
{path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
