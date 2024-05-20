import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private jsonBaseUrl = 'assets/jsonFiles/';
  constructor(private http: HttpClient) { }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.jsonBaseUrl + 'es_Categories.json');
  }
}



