import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);

  constructor() {}

  getCartItems() {
    return this.cartItems.asObservable();
  }

  setCartItems(items: any[]) {
    this.cartItems.next(items);
  }

  addToCart(product: any) {
    let currentItems = this.cartItems.value;
    let existingItem = currentItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    this.cartItems.next([...currentItems]);  
  }
}
