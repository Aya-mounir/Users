import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _HttpClient: HttpClient,
    public _ProductsService: ProductsService
  ) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  }
}
