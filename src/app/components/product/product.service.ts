import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product.model';
import {Observable} from 'rxjs';


const headerOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  producDBUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  createProduct(product: Product): Observable<Product> {
    console.log(product);
    return this.httpClient.post<Product>(this.producDBUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.producDBUrl, headerOption);
  }

  readProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.producDBUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.producDBUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.producDBUrl}/${product.id}`;
    return this.httpClient.put<Product>(url, product);
  }

}
