import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { Crop } from '../objects/crop';
import { CropService } from '../services/cropService';

@Component({
  selector: 'greenhouse-crop-update',
  templateUrl: './greenhouse-crop-update.component.html',
  styleUrls: ['./greenhouse-crop-update.component.css']
})
export class GreenhouseCropUpdateComponent implements OnInit {
id: number;
  submitted = false;
  crop:Crop;
public crops_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: CropService,
                public location: Location) {

                
               this.crop= new  Crop(105,"Gerbera","Flower","It is a flower",new Date(2017,2,16,10,20,15,0),"","Sapling");
               route.params.subscribe(params => { this.id = params['cropId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.crop=data},
                                      err=>{this.crops_error=true;}
                                    )             
    }
  
  submit(form)  {
            this.svc.update(this.crop);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 
   
}
