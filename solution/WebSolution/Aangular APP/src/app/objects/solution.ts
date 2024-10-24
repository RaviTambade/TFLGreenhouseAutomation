 
export class Solution  {
 
constructor( public solutionId:number,
            public title:String,
            public quantity:number,              
             public description:String,
            public day:number,
            public  year:number,
            public month:number,
            public hour:number,
            public  minute:number,
            public greenhouse:String,
            public ingredients:[{}],
            public tank:String)
            { }

}