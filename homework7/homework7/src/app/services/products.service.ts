import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }
  getproducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('https://fakestoreapi.com/products/');
  }
}
