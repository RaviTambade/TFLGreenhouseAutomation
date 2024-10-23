
export class Task  {
 
constructor(public  taskId:number,
            public  title:string,
            public  description:string,
            public  category:string,
            public  duration:number,
            public day:number,
            public month:number,
            public year:number,
            public hour:number,
            public minute:number,
            public  status:string,
            public  assignedTo:string,
            public  assignedBy:string)
            { }

}