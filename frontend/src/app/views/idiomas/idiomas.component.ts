import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  meuExemploTexto: string = 'Esse é um exemplo de texto passado pelo [(ngModel)]';

  selected = true;

  constructor(
    private headerService: HeaderService
  ) { 
    this.headerService.headerData = {
      title: 'Idiomas',
      icon: 'settings',
      routeUrl: '/languages'
    }
  }

  ngOnInit(): void {}
    
  onChange(value: any): void {
    console.log("onChange funciona! Valor apresentado: " + value)
  }
}
