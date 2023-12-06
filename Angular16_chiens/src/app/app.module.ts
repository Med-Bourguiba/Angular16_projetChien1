import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiensComponent } from './chiens/chiens.component';
import { AddChienComponent } from './add-chien/add-chien.component';
import { FormsModule } from '@angular/forms';
import { UpdateChienComponent } from './update-chien/update-chien.component';
import { RchercheParRaceComponent } from './rcherche-par-race/rcherche-par-race.component';
import { RechercherParNomComponent } from './rechercher-par-nom/rechercher-par-nom.component';
import { ListeRacesComponent } from './liste-races/liste-races.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { UpdateRaceComponent } from './update-race/update-race.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { TokenInterceptor } from './services/token.interceptor';
import { AddRoleForUserComponent } from './add-role/add-role.component';
import { ListeOfusersComponent } from './liste-user/liste-user.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { UpdateRolesComponent } from './update-roles/update-roles.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ChiensComponent,
    AddChienComponent,
    UpdateChienComponent,
    RchercheParRaceComponent,
    RechercherParNomComponent,
    ListeRacesComponent,
    UpdateRaceComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchFilterPipe,
    AddRoleForUserComponent,
    ListeOfusersComponent,
    ListeRolesComponent,
    UpdateRolesComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
