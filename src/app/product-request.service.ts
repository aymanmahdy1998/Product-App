import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  http = inject(HttpClient);


  constructor() { }

  getProductsList(limit: number = 9, skip: number = 0): Observable<any> {
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  pagination(): Observable<any> {
    const limit = 9;
    const skip = 0;
    return this.http.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  }
}
