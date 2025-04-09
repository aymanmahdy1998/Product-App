import { ProductRequestService } from './../product-request.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: any | null = null;
  productService = inject(ProductRequestService);
  cartService = inject(CartService);
  counterService = inject(CounterService);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.loadProduct(productId);
    });
  }

  loadProduct(productId: number) {
    this.productService.getProductById(productId).subscribe(
      response => {
        this.product = response;
      },
    );
  }

  getStars(rate: number): number[] {
    return Array(Math.round(rate)).fill(0);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.counterService.increaseCounter();
  }
}
