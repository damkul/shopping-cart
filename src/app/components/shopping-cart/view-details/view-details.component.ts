import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  
productItem  = {id:0} //Product = {id:0,name:'',description:'',price:100,imageUrl:''}
  constructor(private msg:MessengerService) { }

  ngOnInit() {
       
       this.msg.getMsg().pipe(take(1)).subscribe((modal: Product) => {
        
        this.productItem.id = 15;
        console.log('2 ' + this.productItem.id)
        this.viewProductDetails(modal)
       
        console.log('3 ' + this.productItem.id)
      });
     
      console.log('4 ' + this.productItem.id)
  }
  viewProductDetails(product:Product)
  {
    console.log('before ' + this.productItem.id)
      this.productItem.id =product.id ;
      console.log('after ' + this.productItem.id)
  }
}

