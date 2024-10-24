 
export class RequiredClimate  {
 
constructor(public  requiredClimateId:number,
            public  cropName:string,
            public  dayTemperature:number,
            public  nightTemperature:number,
            public  humidity:number,
            public  luminosity:number,
            public  waveLength:number,
            public  ec:number,
            public  ph:number)
            { }

}