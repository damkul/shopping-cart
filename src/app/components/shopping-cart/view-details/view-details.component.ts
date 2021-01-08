import { take } from 'rxjs/operators';
import { Component, OnInit,Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  
productItem:Product
  
  constructor(private stateService: StateService) { }
cartItem
ngOnInit() {
  this.productItem = this.stateService.product
}
  }
