import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [
    new Product(1,"Roadster shirt","Maroon Designer-Top-For-Jeans",500,"..\\assets\\images\\women\\Designer-Top-For-Jeans.jpg"),
    new Product(2,"W Kurti","Ehanic Kurti",1100,"..\\assets\\images\\women\\ehanic_Kurti.jpg"),
    new Product(3,"Wrogen Jeans","Blue Torn Jeans",1500,"..\\assets\\images\\women\\jeans.jpg"),
    new Product(4,"Zara","Salawar Suit",500,"..\\assets\\images\\women\\salwar_suit.png"),
    new Product(5,"zara","Ethanic Saree",800,"..\\assets\\images\\women\\silk-saree.jpg"),
    new Product(6,"Roadster Joggers"," Olive Green Joggers",2200,"..\\assets\\images\\men\\wrg_pant_1.jpg"),
    new Product(7,"Wrogen shirt"," checked shirt",500,"..\\assets\\images\\men\\wrg_shirt_3.jpg"),
    new Product(8,"Wrogen Sneakers","Wrogen Black Sneakers",5000,"..\\assets\\images\\men\\wrg_shoe_1.jpeg"),
    new Product(9,"Zara","White Leather Belt",500,"..\\assets\\images\\men\\wrg_belt_2.jpg"),
    new Product(10,"Roadster shirt","Maroon Cotton T-shirt",500,"..\\assets\\images\\men\\wrg_tshirt_1.jpeg"),
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
