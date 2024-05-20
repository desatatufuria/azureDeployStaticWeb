import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'

})
export class ProductDetailComponent {

  productId: number = 0;
  product?: Product = undefined;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if(this.productId == 0){
        return;
      }
      this.productService.getProductById(this.productId).subscribe(data => {
        this.product = data;
      }, error => {
        console.log(error);
      });
    });
  }

  addToCart(): void {
    if (this.product) {
      this.shoppingCartService.addToCart(this.product);
    }
  }
  
}
