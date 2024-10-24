import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    //decoraters

    @Input()  name:string;
    @Input()  color:string;
    @Input()  category:string;
    @Input()  price:number;
    
    likes:number;

  constructor() {
                this.name="Gerbera";
                this.price=3,
                this.color="red";
                this.category="Gerbera";
                this.likes=10;
   }

  ngOnInit() {
    
  }

    like(){
            this.likes+=1;
            return false;
        }

    unlike(){
            this.likes-=1;
            return false;
        }
}
