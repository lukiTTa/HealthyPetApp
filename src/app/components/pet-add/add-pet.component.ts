import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-Pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  pet: Pet = {
    nome: '',
    tipo: '',
    idade: undefined
  };
  submitted = false;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  savePet(): void {
    const data = {
      nome: this.pet.nome,
      tipo: this.pet.tipo,
      idade: this.pet.idade
    };

    this.petService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPet(): void {
    this.submitted = false;
    this.pet = {
      nome: '',
      tipo: '',
      idade: undefined
    };
  }

}
