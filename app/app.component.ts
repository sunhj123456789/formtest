import { Component } from '@angular/core';
import{FormsModule} from'@angular/forms';
import {person} from './models/person';
import{ ServiceService} from './service.service';
//import {person} from '../models/person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  person:person={
    deposit:null,
    reason:null,
    date:null
  };
constructor(private myservice:ServiceService){}
  
  title = 'angularsecond';
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

    submit(emp:person){
     console.log(emp.deposit);
     console.log(emp.date=new Date());
     console.log(emp);
    this.myservice.save(emp);
    }



}
