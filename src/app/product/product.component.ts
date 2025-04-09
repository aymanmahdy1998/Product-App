import { Component, inject } from '@angular/core';
import { ProductRequestService } from '../product-request.service';
import { CommonModule } from '@angular/common';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [];
  productService = inject(ProductRequestService);

  page: number = 1;
  limit: number = 9;

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    const skip = (this.page - 1) * this.limit;
    this.productService.getProductsList(this.limit, skip).subscribe(
      (response) => {
        this.products = response.products;
      }
    );
  }

  nextPage() {
    this.page++;
    this.loadProducts();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    }
  }
}
