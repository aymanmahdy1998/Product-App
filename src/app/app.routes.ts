import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: 'login',title:"Login", component: LoginComponent },
  { path: 'register',title:"Register", component: RegisterComponent },
  { path: 'cart',title:"Cart", component: CartComponent },
  { path: '',title:"Home", component: ProductComponent }, 
  { path: 'product/:id',title:"Details", component: ProductDetailsComponent },
  { path: '**',title:"404 Not Found", component: NotFoundComponent }
];
