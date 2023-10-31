import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent  {

name:string='Angular Learning';
flag:boolean=true;
item:string='Apple';
name1:string ="asok444444444444444";
bgcolor:string="bgcoloryellow";
getname()
{
   return this.name;
}

changeName()
{
   this.name="Java Laearning";
}
applyCtrlValue(event:Event):string
{
return  ((event.target as HTMLInputElement).value);
}

GetAverage(mark:string)
{
   alert(parseInt(mark)/6);
}



getName_eventBinding()
{
  this.name1="Boopathi";
  return this.name1;

}

ReadRefVariable( id:string)
{
alert(id);
}

Myfunction(event:Event)
{
this.name1= (event.target as HTMLInputElement).value;
}

onSubmit(itemfrm:any)
{
alert(itemfrm.value.email);
}
}


