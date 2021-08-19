import { Component, OnInit } from '@angular/core';
import '@angular/material/form-field'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

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
    

}
