import { Component, OnInit } from '@angular/core';
import { Pais } from './pais.model';
import { Cidade } from './cidades/cidades.model';
import { DataServiceCidadeService } from './cidades/data-service-cidade.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-lstpaises',
  templateUrl: './lstpaises.component.html',
  styleUrls: ['./lstpaises.component.css'],
  providers: [DataServiceCidadeService]
})
export class LstpaisesComponent implements OnInit {
  
  paisSelecionado: Pais = {
    id: 0,
    nome: 'Brasil'
  }

  cidades : Cidade[] = [];
  paises : Pais[] = [];
  

  constructor(
    private _dataService: DataServiceCidadeService
  ) {
    this.paises = this._dataService.getPaises();
   }

  ngOnInit(): void {
  }

  onSelect(id: number) {
    this.cidades = this._dataService.getCidades().filter((item)=> item.paisid == id);
  }
}
