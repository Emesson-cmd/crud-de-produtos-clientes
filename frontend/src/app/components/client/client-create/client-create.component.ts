import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../product/product.service'; 
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: '',
    salario: null
  }

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  criarCliente(): void {
    this.clientService.createClient(this.client).subscribe(() => {
      this.clientService.showMessage("Cliente criado!")
      this.router.navigate(['/clients'])
      console.log("Salvando cliente... Salvo com sucesso!")
    })
  }

  cancelar(): void {
    this.router.navigate(['/clients'])
  }

}
