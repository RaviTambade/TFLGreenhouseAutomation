import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Item} from '../objects/Item';
import {StoreService} from '../services/storeService';


@Component({
  selector: 'app-store-inventory-details',
  templateUrl: './store-inventory-details.component.html',
  styleUrls: ['./store-inventory-details.component.css']
})
export class StoreInventoryDetailsComponent implements OnInit {

itemId:number;   
item:Item;
public item_error:Boolean;
 
  constructor(private route:ActivatedRoute,private svc: StoreService,private location:Location) {
        this.item = new Item(123,"title","description","category",2);
        /*this.itemId=123;*/
    route.params.subscribe(params => { this.itemId = params['itemId']; });
    
    
   }
          
  ngOnInit() {

      this.svc.search(this.itemId).subscribe(
        data => {this.item = data},
        err => {this.item_error=true;})
      
//     this.item= this.svc.getItem(23);
  }

}
