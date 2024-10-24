import { Component, OnInit } from '@angular/core';

import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


 products: ProductItemComponent[];

  constructor() { 

     this.products = [ new  ProductItemComponent(),
                      new  ProductItemComponent()                
           ];
  }

  ngOnInit() {

  }


 sortProducts():ProductItemComponent[]{
       var sortedProducts:ProductItemComponent[];
       return this.products.sort((a: ProductItemComponent, b: ProductItemComponent) => b.likes - a.likes);
   }
   
}
