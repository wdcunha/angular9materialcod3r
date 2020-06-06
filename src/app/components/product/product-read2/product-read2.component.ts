import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {ProductRead2DataSource} from './product-read2-datasource';
import {Product} from '../product.model';

/**
 * Needs to be adapted to this project reality, bringing datas from product db.json
 * but until now it is here just to show how this material component works
 * Cod3r Cursos
 * Angular 9 - Curso Grátis - Entendendo Componente Gerado [2020]
 * https://www.youtube.com/watch?v=ut3Ht8vxmDw&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3&index=20
 */
@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    this.dataSource = new ProductRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
