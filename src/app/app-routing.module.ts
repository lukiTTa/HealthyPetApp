import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesListComponent } from './components/cliente-list/clientes-list.component';
import { AddClienteComponent } from './components/cliente-add/add-cliente.component';
import { ClienteDetailsComponent } from './components/cliente-details/cliente-details.component';
import { AddPetComponent } from './components/pet-add/add-pet.component';
import { PetsListComponent } from './components/pet-list/pets-list.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesListComponent },
  { path: 'clientes/:id', component: ClienteDetailsComponent },
  { path: 'add-clientes', component: AddClienteComponent },
  { path: 'pets', component: PetsListComponent },
  { path: 'pets/:id', component: PetDetailsComponent },
  { path: 'add-pets', component: AddPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
