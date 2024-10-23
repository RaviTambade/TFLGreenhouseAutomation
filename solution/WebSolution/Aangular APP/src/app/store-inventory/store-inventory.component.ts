import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {Item} from '../objects/Item';
import {StoreService} from '../services/storeService';


@Component({
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styleUrls: ['./store-inventory.component.css']
})
export class StoreInventoryComponent implements OnInit {
public items_error:boolean=false;
items:Item[];
query:string;

  constructor(private router:Router,private svc:StoreService,private route:ActivatedRoute) { 
    this.route
      .queryParams
      .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
     console.log("In Inventory Component");
     this.svc.getAllItems().subscribe(
       data=>{this.items=data},
       err=>{this.items_error=true;}
     
     )}

}

