import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() user;
hello="welcome";

  constructor() { }

  ngOnInit() { }
  deleteuser(del){
    for(var i=0;i<this.user.length;i++){
      if(del===this.user[i])
      {
      this.user.splice(i,1);
      }
  }
}

}
