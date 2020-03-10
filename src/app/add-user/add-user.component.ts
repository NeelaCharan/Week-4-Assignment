import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

@Output() event:EventEmitter<any>=new EventEmitter(); 
firstName:string;
lastName:string; 
 name:string;

  /*users={
    fname:this.firstName,
    lname:this.lastName
  };*/

  ngOnInit() {}
   sendToParent(){
    this.name=this.firstName+this.lastName;
    console.log(this.name);
    this.event.emit(this.name);
  
   }

}
