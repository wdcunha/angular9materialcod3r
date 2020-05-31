import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../components/product/product.service';
import {Product} from '../../components/product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: Product) => {
        this.products = data;
        console.log('data: ' + data);
      }
    );
  }

}
