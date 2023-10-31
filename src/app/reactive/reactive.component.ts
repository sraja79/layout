import { Component ,OnInit} from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
/*
  user=new FormGroup({
 

  });FormGroup
FormControl
FormBuilder
*/
frm=this.fb.group({
  "email":new FormControl
  ('',  [Validators.required,Validators.minLength(2),Validators.maxLength(18)]),

  "fname":new FormControl('',Validators.required)
});
/*
frm=new FormGroup({
  "email":new FormControl
  ('',  [Validators.required,Validators.minLength(2),Validators.maxLength(18)]),

  //2nd fld 
"fname":new FormControl('',Validators.required)

});
*/

/**
 *
 */
constructor(private fb:FormBuilder) {

  
}

  ngOnInit(): any {

  }

  formval()
  {
    console.log("validate ==>",this.frm.controls['email'].valid);
    console.log("errors ==>",this.frm.controls['email'].errors);
  }

}
