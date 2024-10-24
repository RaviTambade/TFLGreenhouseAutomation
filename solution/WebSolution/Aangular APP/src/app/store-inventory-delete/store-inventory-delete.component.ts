import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Item} from '../objects/Item';
import {StoreService} from '../services/storeService';
@Component({
  selector: 'app-store-inventory-delete',
  templateUrl: './store-inventory-delete.component.html',
  styleUrls: ['./store-inventory-delete.component.css']
})
export class StoreInventoryDeleteComponent implements OnInit {
  itemId:number;
  item:Item;
  public item_error:Boolean;
  constructor(private route:ActivatedRoute,private svc:StoreService,private location:Location) {
    this.item =new Item(123,"title","category","description",3);
    route.params.subscribe(params => {this.itemId = params['itemId'];});
    console.log(this.itemId);
   }

  ngOnInit():void {
    this.svc.search(this.itemId).subscribe(
              data => {this.item = data},
              err=>{this.item_error=true;})
    
  }
  yes():void {
      this.svc.delete(this.item.itemId),
      this.location.back();
  }
  no():void{
    this.location.back();
  }

}

