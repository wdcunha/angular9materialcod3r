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

  getProducts(): Observable<any> {
    return this.httpClient.get(this.producDBUrl, headerOption);
  }
}
