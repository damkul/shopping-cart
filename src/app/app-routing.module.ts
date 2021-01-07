import { ViewDetailsComponent } from './components/shopping-cart/view-details/view-details.component';

import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'details',component:ViewDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [CartComponent,CartItemComponent,HomeComponent,ViewDetailsComponent]