import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-consulta-add',
  templateUrl: './consulta-add.component.html',
  styleUrls: ['./consulta-add.component.css']
})
export class ConsultaAddComponent implements OnInit {
  consulta: Consulta = {
    data: undefined,
    pet: '',
    motivo: '',
    valor: undefined
  };
  submitted = false;
  petList = new Array;

  constructor(private petService: PetService, private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.retrievePets();
    console.log(this.petList);
  }

  saveConsulta(): void {
    const data = {
      data: this.consulta.data,
      pet: this.consulta.pet,
      motivo: this.consulta.motivo,
      valor: this.consulta.valor
    };

    console.log(data);

    this.consultaService.create(data)
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

  newConsulta(): void {
    this.submitted = false;
    this.consulta = {
      data: undefined,
      pet: '',
      motivo: '',
      valor: undefined
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
