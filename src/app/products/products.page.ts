import { SearchService, Item } from './../search/search.service';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, toArray } from 'rxjs/operators';
import { Product } from './state/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.css'],
})
export class ProductsPage implements OnInit {
  products$: Observable<Product[]> = of([]);

  constructor(
    private productSvc: ProductService,
    private searchSvc: SearchService
  ) {}

  ngOnInit(): void {
    console.log('products page initialized');
    this.products$ = this.productSvc.getProducts$();

    //this.searchSvc.searchItemsState.next([{"name": "Product A"},{"name": "Product B"},{"name": "Product A"},{"name": "Product C"}])

  }
  logArray(ps: Product[]): void {
    console.log('products array', ps);
  }
}
