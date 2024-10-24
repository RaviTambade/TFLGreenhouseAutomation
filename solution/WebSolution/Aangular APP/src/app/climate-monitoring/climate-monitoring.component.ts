import { Component, OnInit,ReflectiveInjector } from '@angular/core';

import { Environment} from '../objects/environment';
import { EnvironmentService} from '../services/environmentService';

@Component({
  selector: 'app-climate-monitoring',
  templateUrl: './climate-monitoring.component.html',
  styleUrls: ['./climate-monitoring.component.css']
})
export class ClimateMonitoringComponent implements OnInit {

greenhouseClimate:Environment[];
  constructor(private svc: EnvironmentService) { 
        const injector: any = ReflectiveInjector.resolveAndCreate([EnvironmentService]);
        this.svc = injector.get(EnvironmentService);
  }
          
  ngOnInit() {
     //this.greenhouseClimate= this.svc.getEnvironment();
  }
}
