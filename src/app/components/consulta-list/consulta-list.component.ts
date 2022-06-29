import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.css']
})
export class ConsultaListComponent implements OnInit {
  consultas?: Consulta[];
  currentConsulta?: Consulta;
  currentIndex = -1;

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.retrieveConsultas();
  }

  retrieveConsultas(): void {
    this.consultaService.getAll()
      .subscribe(
        data => {
          this.consultas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveConsultas();
    this.currentConsulta = undefined;
    this.currentIndex = -1;
  }

  setActiveConsulta(cliente: Consulta, index: number): void {
    this.currentConsulta = cliente;
    this.currentIndex = index;
  }

  removeAllConsultas(): void {
    this.consultaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
}
