import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): string {
    if (!discountPercentage || discountPercentage <= 0) {
      return `EGP ${price.toFixed(2)}`;
    }
    
    const discountedPrice = price - (price * (discountPercentage / 100));
    return `<del class="text-danger">EGP ${price.toFixed(2)}</del> EGP ${discountedPrice.toFixed(2)}`;
  }
}
