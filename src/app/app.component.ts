import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'usersapp';
   firstName;
   lastName;
  users=[
    

  ];
  con;
  name;
  constructor(){ };

  ngOnInit(){}
  setData(temp){

  console.log("Firstname",temp);
    const a={
      firstName:temp
    }
    this.users.push(a);
    //console.log(this.users)
  }
  getcount(){
   return this.con=this.users.length;
  }
  
}
