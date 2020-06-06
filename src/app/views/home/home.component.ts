import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../components/product/product.service';
import {Product} from '../../components/product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
