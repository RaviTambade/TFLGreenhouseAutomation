
export class Environment  {
 
constructor(     public climateId:number,
                 public day:Number,
                 public month:Number,
                 public year:Number,
                 public hour:Number,
                 public minute:Number,
                 public temperature:number,
                 public humidity:number,
                 public light:number,
                 public windSpeed:number,
                 public co2:number,
                 public soilMoisture:number,
                 public ph:number,
                 public ec:number)
            { }

}