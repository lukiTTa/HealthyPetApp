import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  petCount = undefined;
  clienteCount = undefined;
  consultaCount = undefined;
  diagnosticoCount = undefined;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getPetsCount();
    this.getClientesCount();
    this.getConsultasCount();
    this.getDiagnosticosCount();
  }

  getPetsCount(): void {
    this.dashboardService.getPetsCount()
      .subscribe(
        data => {
          this.petCount = data.pets;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getClientesCount(): void {
    this.dashboardService.getClientesCount()
      .subscribe(
        data => {
          this.clienteCount = data.clientes;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getConsultasCount(): void {
    this.dashboardService.getConsultasCount()
      .subscribe(
        data => {
          this.consultaCount = data.consultas;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getDiagnosticosCount(): void {
    this.dashboardService.getDiagnosticosCount()
      .subscribe(
        data => {
          this.diagnosticoCount = data.diagnosticos;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
