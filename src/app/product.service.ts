import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonBaseUrl = 'assets/jsonFiles/'; 
  private AllProductsUrl = 'es_AllProducts.json';
  private FeaturedProductsUrl = 'es_FeaturedProducts.json';
  private Category1ProductsUrl = 'es_Jackets.json';
  private Category2ProductsUrl = 'es_Trousers.json';
  private Category3ProductsUrl = 'es_Footwear.json';

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonBaseUrl + this.AllProductsUrl);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonBaseUrl + this.FeaturedProductsUrl);
  }

  getByCategoryProducts(idCategory: number): Observable<Product[]> {

    let CategoryProductsUrl = '';
    switch (idCategory) {
      case 1:
        CategoryProductsUrl = this.Category1ProductsUrl;
        break;
      case 2:
        CategoryProductsUrl = this.Category2ProductsUrl;
        break;
      case 3:
        CategoryProductsUrl = this.Category3ProductsUrl;
        break;
      default:
        CategoryProductsUrl = this.AllProductsUrl;
        break;
    }

    return this.http.get<Product[]>(this.jsonBaseUrl + CategoryProductsUrl);
  }

  getProductById(productId: number): Observable<Product | undefined> {
    let allProducts = this.http.get<Product[]>(this.jsonBaseUrl + this.AllProductsUrl);
    let productById = allProducts.pipe(
      map(products => products.find(product => product.id == productId))
    );
    return productById;
  }

}
