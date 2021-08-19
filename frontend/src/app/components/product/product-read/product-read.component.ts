import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  /**
   * Quando clicarmos em produto, no nav-bar, vamos instanciar
   * product-crud que instanciará product-read, essa classe.
   * Quando essa classe for iniciada, o ngOnInit() será iniciado
   * também. Quando isso acontecer, o Service será chamado, que
   * chamará o read(). O read basicamente vai retornar um array
   * com todos os produtos. O método subscribe basicamente vai
   * atribuir o valor desse array retornado por read à array
   * products dessa classe.
   */
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
