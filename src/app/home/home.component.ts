import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { ProductItemShowcaseComponent } from '../product-item-showcase/product-item-showcase.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductItemShowcaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(data => {
      this.featuredProducts = data;
    }, error => {
      console.log(error);
      this.featuredProducts = [];
    });
  }
}
