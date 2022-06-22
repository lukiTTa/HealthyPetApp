import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesListComponent } from './components/cliente-list/clientes-list.component';
import { AddClienteComponent } from './components/cliente-add/add-cliente.component';
import { PetsListComponent } from './components/pet-list/pets-list.component';
import { AddPetComponent } from './components/pet-add/add-pet.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { DiagnosticoAddComponent } from './components/diagnostico-add/diagnostico-add.component';
import { DiagnosticoDetailsComponent } from './components/diagnostico-details/diagnostico-details.component';
import { DiagnosticoListComponent } from './components/diagnostico-list/diagnostico-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientesListComponent,
    ClienteDetailsComponent,
    AddClienteComponent,
    PetsListComponent,
    AddPetComponent,
    PetDetailsComponent,
    DiagnosticoAddComponent,
    DiagnosticoDetailsComponent,
    DiagnosticoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
