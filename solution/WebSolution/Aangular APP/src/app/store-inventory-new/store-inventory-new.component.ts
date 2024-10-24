import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Item} from '../objects/Item';
import {StoreService} from '../services/storeService';

@Component({
  selector: 'app-store-inventory-new',
  templateUrl: './store-inventory-new.component.html',
  styleUrls: ['./store-inventory-new.component.css']
})
export class StoreInventoryNewComponent {
  value:Item;
  constructor(public route:ActivatedRoute,public svc:StoreService,public location:Location) {
    }
  

  ngOnInit():void { }
    submit(form)
    {
      this.value = form;
      console.log('Inserting Value' + this.value);
      this.svc.insert(this.value);
      this.location.back;
    }
    back():void{
      this.location.back();
    }
  }



