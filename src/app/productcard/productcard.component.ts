import { CommonModule } from '@angular/common';
import { Component , inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-productcard',
  imports: [CommonModule,RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
  @Input() product: any;

  getStars(rate: number): number[] {
    return Array(Math.round(rate)).fill(0);
  }

  cartService = inject(CartService);
  counterService = inject(CounterService);


  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.counterService.increaseCounter(); 

  }
}
