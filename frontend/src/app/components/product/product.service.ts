import { Injectable } from '@angular/core';
import { MatSnackBar } from'@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  /**
   * 
   * Inserir no backend um novo produto
  '* Quando ela for chamada, será passado como parâmetro,
  '* um Produto
   * Esse Produto terá um id, name e price
   *  
   * Nesse método terá como return um Observable<Product>
   * 
   * O método http.post() tem como parâmetro uma URL
   * que é exatamente o endereço de onde os produtos
   * estão
   * 
   * localhost:3001/products
   * 
   * Eu envio pro método um produto com nome e preço, e 
   * espero receber um produto com nome, preço e id
   * 
   * O Id é gerado no backend da aplicação
   * 
   * Qual o evento que vai ativar o Observable:
   * quando a requisição retornar
   * Estou submetendo uma requisição para o backend
   * e se foi bem sucedida vou receber um 200 (OK) de resposta;
   */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  } 
}
