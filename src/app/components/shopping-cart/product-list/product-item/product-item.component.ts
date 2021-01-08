import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : Product
  public cartItems = []
  cartTotal = 0
  constructor(private msg:MessengerService,private stateService: StateService,private router:Router) { }
  

  ngOnInit() {
  }

  handleAddToCart(){
  // this.msg.sendMsg(this.productItem);
   let productExist = false;
    
    for(let i in this.cartItems)
    {
      if (this.cartItems[i].productId === this.productItem.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }  
    if (!productExist) {
        this.cartItems.push({
        productId:this.productItem.id,
        productname:this.productItem.name,
        qty:1,
        price:this.productItem.price,
        imageUrl:this.productItem.imageUrl,
        description:this.productItem.description});
        
        
    }
    this.stateService.cartItems = this.cartItems;
  }
  handleViewDetails(){
    this.stateService.product = this.productItem;
    this.router.navigate(['/details'])
 }

}
