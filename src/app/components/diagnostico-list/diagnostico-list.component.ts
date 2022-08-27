import { Component, OnInit } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico.model';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-diagnostico-list',
  templateUrl: './diagnostico-list.component.html',
  styleUrls: ['./diagnostico-list.component.css']
})
export class DiagnosticoListComponent implements OnInit {
  diagnosticos?: Diagnostico[];
  currentDiagnostico?: Diagnostico;
  currentIndex = -1;

  constructor(private diagnosticoService: DiagnosticoService) { }

  ngOnInit(): void {
    this.retrieveDiagnosticos();
  }

  retrieveDiagnosticos(): void {
    this.diagnosticoService.getAll()
      .subscribe(
        data => {
          this.diagnosticos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveDiagnosticos();
    this.currentDiagnostico = undefined;
    this.currentIndex = -1;
  }

  setActiveDiagnostico(cliente: Diagnostico, index: number): void {
    this.currentDiagnostico = cliente;
    this.currentIndex = index;
  }

  removeAllDiagnosticos(): void {
    this.diagnosticoService.deleteAll()
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
