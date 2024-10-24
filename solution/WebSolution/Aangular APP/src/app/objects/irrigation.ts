
export class Irrigation  {
 
constructor(public  irrigationId:number,
            public  greenhouseName:string,
            public  waterMoisture:number,
            public  pumpStatus:string,
            public  day:number,
            public  hour:number,
            public  minute:number,
            public  duration:number,
            public  tankA:string,
            public  tankB:string)
            { }
}