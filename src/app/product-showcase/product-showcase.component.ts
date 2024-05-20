import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../product.service';
import { CategoriesService } from '../categories.service';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { ProductItemShowcaseComponent } from '../product-item-showcase/product-item-showcase.component';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [CommonModule, ProductItemShowcaseComponent],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.css'
})
export class ProductShowcaseComponent {
  products: Product[] = [];
  categories: Category[] = [];

  categorySelected: Category = { id: 0, nombre: '' };
  
  constructor(private productService: ProductService, private categoryService: CategoriesService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    }, error => {
      console.log(error);
      this.products = [];
    });

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log(error);
      this.categories = [];
    });
  }

  selectCategory(categoryId: number) {
    let yaSeleccionada = false;
    if(this.categorySelected.id == categoryId){
      yaSeleccionada = true;
      this.categorySelected = { id: 0, nombre: '' };
    }

    if(categoryId == 0){
      this.categorySelected = { id: 0, nombre: '' };

      this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
        this.products = [];
      });
      return;
    }

    console.log("categoryId",this.categorySelected.id);
    let categ = this.categories.find(x => x.id == categoryId);
    if(categ != undefined && !yaSeleccionada){
      this.categorySelected = categ;

      this.productService.getByCategoryProducts(categoryId).subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
        this.products = [];
      });
    }
    else{
      if(!yaSeleccionada){
        this.categorySelected = { id: 0, nombre: '' };
      }else{
        this.productService.getAllProducts().subscribe(data => {
          this.products = data;
        }, error => {
          console.log(error);
          this.products = [];
        });
      }
      
    }
  }

}
