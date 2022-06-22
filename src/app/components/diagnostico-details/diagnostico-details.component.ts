import { Component, OnInit } from '@angular/core';
import { Diagnostico } from 'src/app/models/diagnostico.model';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diagnostico-details',
  templateUrl: './diagnostico-details.component.html',
  styleUrls: ['./diagnostico-details.component.css']
})
export class DiagnosticoDetailsComponent implements OnInit {
  currentDiagnostico: Diagnostico = {
    data: undefined,
    pet: '',
    doenca: '',
    comentarios: ''
  };
  message = '';

  constructor(
    private diagnosticoService: DiagnosticoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getDiagnostico(this.route.snapshot.params.id);
  }

  getDiagnostico(id: string): void {
    this.diagnosticoService.get(id)
      .subscribe(
        data => {
          this.currentDiagnostico = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateDiagnostico(): void {
    this.message = '';

    this.diagnosticoService.update(this.currentDiagnostico.id, this.currentDiagnostico)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Dados atualizados com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteDiagnostico(): void {
    this.diagnosticoService.delete(this.currentDiagnostico.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/diagnosticos']);
        },
        error => {
          console.log(error);
        });
  }
}
