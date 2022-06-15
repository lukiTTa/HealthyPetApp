import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  pets?: Pet[];
  currentPet?: Pet;
  currentIndex = -1;
  nome = '';

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.petService.getAll()
      .subscribe(
        data => {
          this.pets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePets();
    this.currentPet = undefined;
    this.currentIndex = -1;
  }

  setActivePet(cliente: Pet, index: number): void {
    this.currentPet = cliente;
    this.currentIndex = index;
  }

  removeAllPets(): void {
    this.petService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentPet = undefined;
    this.currentIndex = -1;

    this.petService.findByNome(this.nome)
      .subscribe(
        data => {
          this.pets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
