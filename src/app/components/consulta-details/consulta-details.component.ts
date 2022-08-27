import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-details',
  templateUrl: './consulta-details.component.html',
  styleUrls: ['./consulta-details.component.css']
})
export class ConsultaDetailsComponent implements OnInit {
  currentConsulta: Consulta = {
    data: undefined,
    pet: '',
    motivo: '',
    valor: undefined
  };
  message = '';

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getConsulta(this.route.snapshot.params.id);
  }

  getConsulta(id: string): void {
    this.consultaService.get(id)
      .subscribe(
        data => {
          this.currentConsulta = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateConsulta(): void {
    this.message = '';

    this.consultaService.update(this.currentConsulta.id, this.currentConsulta)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Dados atualizados com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteConsulta(): void {
    this.consultaService.delete(this.currentConsulta.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/consultas']);
        },
        error => {
          console.log(error);
        });
  }
}
