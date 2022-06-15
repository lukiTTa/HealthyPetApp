import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  currentPet: Pet = {
    nome: '',
    tipo: '',
    idade: undefined
  };
  message = '';

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPet(this.route.snapshot.params.id);
  }

  getPet(id: string): void {
    this.petService.get(id)
      .subscribe(
        data => {
          this.currentPet = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePet(): void {
    this.message = '';

    this.petService.update(this.currentPet.id, this.currentPet)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Dados atualizados com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deletePet(): void {
    this.petService.delete(this.currentPet.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/pets']);
        },
        error => {
          console.log(error);
        });
  }
}
