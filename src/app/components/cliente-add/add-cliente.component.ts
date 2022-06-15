import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    endereco: ''
  };
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      email: this.cliente.email,
      telefone: this.cliente.telefone,
      endereco: this.cliente.endereco
    };

    this.clienteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      email: '',
      telefone: '',
      endereco: ''
    };
  }

}
