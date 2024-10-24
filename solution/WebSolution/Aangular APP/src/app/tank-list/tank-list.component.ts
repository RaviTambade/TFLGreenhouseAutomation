import { Component, OnInit,ReflectiveInjector } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Tank} from '../objects/tank';
import { TankService } from '../services/tankService';
@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrls: ['./tank-list.component.css']
})
export class TankListComponent implements OnInit {

public tank_error:boolean=false;
  tanks:Tank[];
 query:string;
  constructor( private router:Router,private svc:TankService,
               private route:ActivatedRoute) {
               this.route
                        .queryParams
                        .subscribe(params => {this.query = params['query']||'';});
  }
          
  ngOnInit() {
        
     this.svc.getAll().subscribe(
       data=>{this.tanks=data},
       err=>{this.tank_error=true;}
      
     )}


}
