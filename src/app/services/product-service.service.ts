import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { ProductCategory } from '../model/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    baseURL="http://localhost:8082/api/products";
   constructor(private http:HttpClient) {

    }

  public getProduct(cid:number): Observable<Product[]>{
          const url= this.baseURL + "/findByCategory?id="+cid;
          console.log(url);
          return this.http.get<Product[]>(url);
    }

  public getCategoryList():Observable<ProductCategory[]>
  {

      // write code to requst information from backend restservice

      return null;
  }
          
  
}