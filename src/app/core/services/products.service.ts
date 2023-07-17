import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get('https://dummyjson.com/products');
  }
  getOneProduct(id: any): Observable<any> {
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`);
  }
}
