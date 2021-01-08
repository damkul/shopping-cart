import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  product:Product
  productItem:Product
  cartItems = []
  constructor() { }
  addItemToCart(item:Product){
    let productExist = false;
    for(let i in this.cartItems)
    {
      if (this.cartItems[i].productId === item.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }  
    if (!productExist) {
        this.cartItems.push({
        productId:item.id,
        name:item.name,
        qty:1,
        price:item.price,
        imageUrl:item.imageUrl,
        description:item.description});
    }
    
  }
}
