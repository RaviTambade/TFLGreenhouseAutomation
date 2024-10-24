
export class TankSchedule  {
 
constructor(
                public  tankscheduleId:number,
                public year:number,
                public month:number,
                public  day:number,
                public hour:number,
                public minute:number,
                public  tankName:string,
                public  quantity:number,
                public  solutionId:number,
                public  usageDuration:number)
            { }

}