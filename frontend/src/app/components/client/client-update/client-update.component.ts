import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client = {
    name: '',
    salario: null
  }

  constructor(
    private router: Router, 
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client
    })
  }

  atualziarCliente(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente atualizado com sucesso!')
      this.router.navigate(['clients'])
    })
  }

  cancelar(): void {
    this.router.navigate(['clients'])
  }
}
