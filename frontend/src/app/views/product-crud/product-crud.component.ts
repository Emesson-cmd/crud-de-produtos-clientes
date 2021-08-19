import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  /**
   * 
   * O Router é automaticamente instanciado. Eu nao preciso
   * correr atrás para instancia-los, uma vez que o formato
   * TypeScript é tipado, ou seja, eu preciso definir o tipo
   * de um atributo.
   * 
   * O responsável por instanciar o Router é o próprio Angular.
   * 
   * Quando eu referenciar a tag app-product-crud o Router é
   * instanciado imediatamente
   * 
   */
  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  /**
   * 
   * Quando o método navigateToProductCreate for chamado (ele 
   * será chamado quando clicar no botão "Novo produto"), será 
   * redirecionado para a url 'products/create'.
   * 
   */
  navigateToProductCreate(): void {
    this.router.navigate(['products/create'])
  }

}
