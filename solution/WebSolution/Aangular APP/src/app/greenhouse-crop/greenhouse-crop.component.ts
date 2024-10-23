import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Crop} from '../objects/crop';
import {CropService} from '../services/cropService';

@Component({
  selector: 'greenhouse-crop',
  templateUrl: './greenhouse-crop.component.html',
  styleUrls: ['./greenhouse-crop.component.css']
})
export class GreenhouseCropComponent implements OnInit {

   public crop_error:boolean=false;
  crops:Crop[];
 query:string;
  constructor( private router:Router,private svc:CropService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        
     this.svc.getcrops().subscribe(
       data=>{this.crops=data},
       err=>{this.crop_error=true;}
      
     )}


}
