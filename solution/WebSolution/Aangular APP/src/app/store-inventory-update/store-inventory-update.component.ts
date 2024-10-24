import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Item} from '../objects/Item';
import {StoreService} from '../services/storeService';

@Component({
  selector: 'app-store-inventory-update',
  templateUrl: './store-inventory-update.component.html',
  styleUrls: ['./store-inventory-update.component.css']
})
export class StoreInventoryUpdateComponent implements OnInit {
 itemId:number;
 submitted = false;
  item:Item;
  public inventory_error:boolean=false;
  constructor(public route:ActivatedRoute,public svc: StoreService,public location:Location) { 
        this.item = new Item(123,"title","category","description",4);
        route.params.subscribe(params => {this.itemId = params['itemId'];});
  }
          
  ngOnInit():void {
   //  this.item= this.svc.getItem(12);
   this.svc.search(this.itemId).subscribe(
         data => {this.item=data},
         err => {this.inventory_error=true;}
   )
  }


  submit(form) {
          this.svc.update(this.item);
          this.location.back();
    }

    back():void{
          this.location.back();
    }
    

}


 
    
 