import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
cartItems = []
  constructor(private stateService: StateService,private router:Router) { }

  ngOnInit() {
    this.cartItems = this.stateService.cartItems
   
  }
  goToCart(){
    this.router.navigate(['/cart'])
  }

}
