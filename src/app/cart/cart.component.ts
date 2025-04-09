import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CounterService } from '../counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  counterService = inject(CounterService);
  cartItems: any[] = [];
  counter: number = 0;

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });

    this.counterService.getCounter().subscribe(count => {
      this.counter = count;
    });
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.updateCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromCart(item);
    }
    this.updateCart();
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.updateCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  private updateCart() {
    this.cartService.setCartItems(this.cartItems);
    const totalQuantity = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.counterService.setCounter(totalQuantity);   
  }
}
