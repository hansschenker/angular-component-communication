import { ProductService } from './../../product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, OnChanges ,OnDestroy, DoCheck } from '@angular/core';
// rxjs
import { Observable, of } from 'rxjs';
import { map, tap } from "rxjs/operators";
// products
import { Product } from '../../state/types';

@Component({
  selector: 'product-list-filter',
  templateUrl: './product-list-filter.component.html',
  styleUrls: ['./product-list-filter.component.css']
})
export class ProductListFilterComponent implements OnInit, DoCheck, OnDestroy {

  private _jsonURL = 'assets/products.json';
  @Input() products$: Observable<Product[]> = of([])

  constructor() { }

  ngOnInit(): void {
    console.log(" ProductListFilter init")
  }
  ngDoCheck() {
    console.log(" ProductListFilter Check")
  }
  ngOnDestroy() {
    console.log(" ProductListFilter destroyed")
  }
}
