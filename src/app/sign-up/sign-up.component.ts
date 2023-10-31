import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userDetails(objuser:any)
  {
alert(objuser.form.value.ufName1 + " " +objuser.form.value.ulName);
console.log(objuser);
  }

  test()
  {
    alert('test');
  }

}
