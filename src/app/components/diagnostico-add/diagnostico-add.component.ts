import { Component, OnInit } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico.model';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-diagnostico-add',
  templateUrl: './diagnostico-add.component.html',
  styleUrls: ['./diagnostico-add.component.css']
})
export class DiagnosticoAddComponent implements OnInit {
  diagnostico: Diagnostico = {
    data: undefined,
    pet: '',
    doenca: '',
    comentarios: ''
  };
  submitted = false;
  petList = new Array;

  constructor(private petService: PetService, private diagnosticoService: DiagnosticoService) { }

  ngOnInit(): void {
    this.retrievePets();
    console.log(this.petList);
  }

  saveDiagnostico(): void {
    const data = {
      data: this.diagnostico.data,
      pet: this.diagnostico.pet,
      doenca: this.diagnostico.doenca,
      comentarios: this.diagnostico.comentarios
    };

    console.log(data);

    this.diagnosticoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      )
  }

  newDiagnostico(): void {
    this.submitted = false;
    this.diagnostico = {
      data: undefined,
      pet: '',
      doenca: '',
      comentarios: ''
    }
  }

  retrievePets(): void {
    this.petService.getAll()
      .subscribe(
        data => {
          data.forEach(pet => {
            this.petList.push(pet.nome);
          })
        },
        error => {
          console.log(error);
        });
  }

}
