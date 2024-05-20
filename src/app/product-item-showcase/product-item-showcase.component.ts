import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-item-showcase',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './product-item-showcase.component.html',
  styleUrl: './product-item-showcase.component.css'
})
export class ProductItemShowcaseComponent {


  //traer un procuto del componente padre
  @Input() product?: Product ;


}
