import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';


@Component({
  selector: 'app-customer-validate',
  templateUrl: './customer-validate.component.html',
  styleUrls: ['./customer-validate.component.css']
})
export class CustomerValidateComponent  {

 submitted = false;
 locations = ['Pune','Mumbai','Delhi','Bangalore','Nashik','Chennai'];
 memberShips = [
                {value:'G',display:'Gold'},
                {value:'S',display:'Silver'},
                {value:'P',display:'Platinum'}
 ];

 social =[
            {value:'T',display:'Twitter'},
            {value:'F',display:'Facebook'},
            {value:'B',display:'Blog'}
 ];


 socialStatus=['T','B'];
 model=new Customer('Rahul','Navale','rahulsn@live.com',8888888888,28,
                    new Date(2016,2,2),this.locations[0],
                    this.memberShips[1].value,
                    false,this.socialStatus,
                    'rahulsn','rahuls');

  constructor() {

  }


 onSubmit(form: any): void {
      this.submitted=true;
      console.log('you submitted value:', form);
 }

 showCustomer(form:any){
        return form && form.controls['firstName'] && form.controls['firstName'].value;
  }

  showFormControls(form:any){
    return form && form.controls['firstName'] && form.controls['firstName'].value;
  }

}
