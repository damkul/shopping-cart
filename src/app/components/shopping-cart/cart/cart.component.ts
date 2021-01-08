import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import{Router,NavigationEnd, ActivatedRoute } from '@angular/router'
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  constructor(private msg:MessengerService,private stateService: StateService,private router:Router) { }
  cartTotal = 0
  
  ngOnInit() {
    this.cartItems = this.stateService.cartItems
    this.cartTotal = 0 ;
    this.cartItems.forEach(element => {
      this.cartTotal += element.qty * element.price
    });
          
  }

}