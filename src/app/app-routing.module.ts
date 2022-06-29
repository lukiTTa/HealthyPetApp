import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesListComponent } from './components/cliente-list/clientes-list.component';
import { AddClienteComponent } from './components/cliente-add/add-cliente.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { AddPetComponent } from './components/pet-add/add-pet.component';
import { PetsListComponent } from './components/pet-list/pets-list.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { DiagnosticoListComponent } from './components/diagnostico-list/diagnostico-list.component';
import { DiagnosticoDetailsComponent } from './components/diagnostico-details/diagnostico-details.component';
import { DiagnosticoAddComponent } from './components/diagnostico-add/diagnostico-add.component';
import { ConsultaListComponent } from './components/consulta-list/consulta-list.component';
import { ConsultaDetailsComponent } from './components/consulta-details/consulta-details.component';
import { ConsultaAddComponent } from './components/consulta-add/consulta-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/:id', component: ClienteDetailsComponent },
  { path: 'add-clientes', component: AddClienteComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'add-pets', component: AddPetComponent },
  { path: 'diagnosticos', component: DiagnosticoListComponent },
  { path: 'diagnosticos/:id', component: DiagnosticoDetailsComponent },
  { path: 'add-diagnosticos', component: DiagnosticoAddComponent },
  { path: 'consultas', component: ConsultaListComponent },
  { path: 'consultas/:id', component: ConsultaDetailsComponent },
  { path: 'add-consultas', component: ConsultaAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
