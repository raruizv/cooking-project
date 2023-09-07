import { Component, OnInit } from '@angular/core';

//import { EmblemProduct } from '../emblemProduct';
import { PRODUCTS } from '../mock-entidades';
import { EmblemproductService } from '../emblem-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products = PRODUCTS;    
  constructor (private emblemproductService: EmblemproductService) { }

  ngOnInit() { 
    this.getProducts();
  }

  getProducts(): void {
    this.emblemproductService.getProducts()
      .subscribe(products => this.products = products);
  }
}
