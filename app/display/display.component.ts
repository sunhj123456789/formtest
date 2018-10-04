import { Component, OnInit } from '@angular/core';
import{ ServiceService} from './../service.service';
import {person} from '../models/person';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  employee:person[];
  data:person;
  objectkey=Object.keys;
  constructor(private myservice:ServiceService) { }

  ngOnInit() {
   
  }
  test():void{
    this.myservice.get().subscribe((data=>
      {
       console.log(data);

       this.employee=data;
       //console.log(this.employee)
     }));
     console.log(this.employee);
     
  }
 

}
