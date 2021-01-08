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
    this.stateService.addItemToCart(this.productItem)
  }
  handleViewDetails(){
    this.stateService.product = this.productItem;
    this.router.navigate(['/details'])
 }

}
