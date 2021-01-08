import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem;
  constructor(private stateService: StateService,private router:Router) { }

  ngOnInit() {
   
  }

  goToDetails(){
    this.stateService.product = this.cartItem
    this.router.navigate(['/details']);
  }

}
