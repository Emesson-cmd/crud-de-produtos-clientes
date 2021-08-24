import { Injectable } from '@angular/core';
import { Cidade } from './cidades.model';
import { Pais } from '../pais.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceCidadeService {

  paises: Pais[] = [
    {
      id: 1,
      nome: 'Argentina'
    },
    {
      id: 2,
      nome: 'Bolivia'
    },
    {
      id: 3,
      nome: 'Brasil'
    },
    {
      id: 4,
      nome: 'Chile'
    },
    {
      id: 5,
      nome: 'Equador'
    }
  ]

  getPaises(): Pais[] {
    return [
      {
        id: 1,
        nome: 'Brasil'
      },
      {
        id: 2,
        nome: 'USA'
      },
      {
        id: 3,
        nome: 'Itália'
      }
    ]
  }

  getCidades(): Cidade[] {
    return [
      {
        id: 1,
        paisid: 1,
        nome: 'São Paulo'
      },
      {
        id: 2,
        paisid: 1,
        nome: 'Brasília'
      },
      {
        id: 3,
        paisid: 1,
        nome: 'Rio de Janeiro'
      },
      {
        id: 4,
        paisid: 1,
        nome: 'Santos'
      },
      {
        id: 5,
        paisid: 2,
        nome: 'New York'
      },
      {
        id: 6,
        paisid: 2,
        nome: 'Chicago'
      },
      {
        id: 7,
        paisid: 2,
        nome: 'Los Angeles'
      },
      {
        id: 8,
        paisid: 3,
        nome: 'Roma'
      },
      {
        id: 9,
        paisid: 3,
        nome: 'Florença'
      },
      {
        id: 10,
        paisid: 3,
        nome: 'Veneza'
      }   ]
  }

  constructor() { }
}
