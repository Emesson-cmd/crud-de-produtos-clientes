import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrlClient = "http://localhost:3001/clients"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrlClient, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrlClient).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string | null): Observable<Client> {
    const url = `${this.baseUrlClient}/${id}`
    return this.http.get<Client>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrlClient}/${client.id}`
    return this.http.put<Client>(url, client).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(client: Client): Observable<Client> {
    const url =  `${this.baseUrlClient}/${client.id}`
    return this.http.delete<Client>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
}