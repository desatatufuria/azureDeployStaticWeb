import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartProducts = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(product: Product): void {
    const currentProducts = this.cartProducts.value;
    const updatedProducts = [...currentProducts, product];
    this.cartProducts.next(updatedProducts);
  }

  getCartProducts(): Observable<Product[]> {
    return this.cartProducts.asObservable();
  }

  removeFromCart(product: Product): void {
    const currentProducts = this.cartProducts.value;
    const updatedProducts = currentProducts.filter(x => x.id !== product.id);
    this.cartProducts.next(updatedProducts);
  }

  buy(): void {
    this.cartProducts = new BehaviorSubject<Product[]>([]);
    alert('Gracias por su compra')
  }

  // Aquí puedes añadir más lógica para eliminar productos, vaciar el carrito, etc.
}