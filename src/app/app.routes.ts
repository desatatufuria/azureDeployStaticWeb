import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product-showcase', component: ProductShowcaseComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent }
];
