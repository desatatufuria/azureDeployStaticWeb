import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  cartProducts: Product[] = [];
  total:number = 0;
  
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.getCartProducts().subscribe(
      products => {
        this.cartProducts = products;
        
        if(this.total == 0){
          for(let product of this.cartProducts){          
            this.total += product.precio;
          }
        }
      }
    );
  }

  removeFromCart(productId: number): void {
    let product = this.cartProducts.find(p => p.id == productId);
    
    if(product){
      this.total = this.total - product.precio;      
      this.shoppingCartService.removeFromCart(product);
    }
  }
  buy(): void {
    this.shoppingCartService.buy();
  }
}
