import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  userName = 'Maria';
 mychilddata!:string;
  updateUser() {
     this.userName = 'Chris';
  }

  getparent(data:any)
  {
    this.mychilddata=data ;
  }
}
