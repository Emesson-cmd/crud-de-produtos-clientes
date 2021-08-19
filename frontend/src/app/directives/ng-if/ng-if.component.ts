import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  cursos: string[] = [
    "Exemplo 1",
    "Exemplo 2",
    "Exemplo 3"
  ]

  selected: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(): void {
    this.selected = !this.selected
  }

}
