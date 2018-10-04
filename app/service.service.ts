import { Injectable } from '@angular/core';
import {person} from './models/person';
import{Observable,BehaviorSubject} from'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  person:person[]=[];
  data:person;
  private msg = new BehaviorSubject<person[]>(null);
  current=this.msg.asObservable();
  constructor() { }

 save(data):void{ 
  
  /// this.person.push(this.data);
   //console.log(this.person);
   this.msg.next(data);
 }

 get():Observable<person[]>{
   return this.current;
 }

}
