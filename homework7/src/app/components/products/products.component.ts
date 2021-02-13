import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../interfaces';
import {ProductsService} from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  constructor(private productService: ProductsService) {
    this.productService.getproducts().subscribe(value => this.products = value);
  }

  ngOnInit(): void {
  }

}
