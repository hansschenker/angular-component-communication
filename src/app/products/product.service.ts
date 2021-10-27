import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Product } from './state/types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _jsonURL="assets/products.json";

  constructor(private http: HttpClient) { }

  public getProducts$(): Observable<Product[]> {

    return this.http.get<Product[]>(this._jsonURL).pipe(
      tap(ps => console.log("ps:", ps)),
      map((products: Product[]) => products)
      );
    }
}
