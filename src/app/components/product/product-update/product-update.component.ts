import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.readById(productId).subscribe(product => {
      this.product = product;
    });
  }

  editProduct(): void {
    this.productService.update(this.product).subscribe(() => {
        this.productService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['products']);
      }
    );
  }

  cancel() {
    this.productService.showMessage('Edição Cancelada!');
    this.router.navigate(['products']);
  }
}
