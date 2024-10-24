import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greenhouse-environment',
  templateUrl: './greenhouse-environment.component.html',
  styleUrls: ['./greenhouse-environment.component.css']
})
export class GreenhouseEnvironmentComponent implements OnInit {

  temperature=30;
  humidity=0.5;
  light=4000;
  soilMoisture=150;
  ec=0.3;
  ph=7;
  co2=2000;
  windSpeed=25;

  constructor() { }

  ngOnInit() {
  }

}
