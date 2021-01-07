import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import{Router,NavigationEnd, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  constructor(private msg:MessengerService) { }
  cartTotal = 0
  
  ngOnInit() {
    this.msg.getMsg().subscribe((product:Product) =>{
     this.addProductToCart(product);
     });
          
  }

  addProductToCart(product:Product){
    let productExist = false;
    
    for(let i in this.cartItems)
    {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }  
    if (!productExist) {
        this.cartItems.push({
        productId:product.id,
        productname:product.name,
        qty:1,
        price:product.price});
    }

    this.cartTotal = 0 ;
    this.cartItems.forEach(element => {
      this.cartTotal += element.qty * element.price
    });
  }
}
