import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TankSchedule} from '../objects/tankSchedule';
import { TankScheduleService } from '../services/tankScheduleService';


@Component({
  selector: 'tankSchedule-list',
  templateUrl: './tankSchedule-list.component.html',
  styleUrls: ['./tankSchedule-list.component.css']
})
export class TankScheduleListComponent implements OnInit {
 
public tankschedule_error:boolean=false;
  tankschedules:TankSchedule[];
 query:string;
  constructor( private router:Router,private svc:TankScheduleService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        
     this.svc.getAll().subscribe(
       data=>{this.tankschedules=data},
       err=>{this.tankschedule_error=true;}
      
     )}

}
