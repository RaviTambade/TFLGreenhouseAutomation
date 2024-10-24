import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Fertilizer } from '../objects/fertilizer';
import { FertilizerService } from '../services/fertilizerService';

@Component({
  selector: 'app-fertilizer-update',
  templateUrl: './fertilizer-update.component.html',
  styleUrls: ['./fertilizer-update.component.css']
})
export class FertilizerUpdateComponent implements OnInit {
 id: number;
  submitted = false;
  fertilizer:Fertilizer;
public fertilizers_error:boolean=false;

  constructor(public route: ActivatedRoute, public svc: FertilizerService,
                public location: Location) {

               this.fertilizer= new  Fertilizer(12,"Potassium","KH02","",12,12,12,12,12,12,12,12,12,12,12,12,12);
               route.params.subscribe(params => { this.id = params['FertilizerId']; });
    }

    ngOnInit(): void {
    this.svc.search(this.id).subscribe(
                                      data=>{this.fertilizer=data},
                                      err=>{this.fertilizers_error=true;}
                                    )             
    }
  
  onSubmit(form)  {
            this.svc.update(this.fertilizer);
            this.location.back();
  }

  back(): void {
      this.location.back();
  } 

}
