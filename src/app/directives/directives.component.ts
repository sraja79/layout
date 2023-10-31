import { Component,OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
 
  ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked ");
 }
 ngAfterViewInit(): void {
  console.log("ngAfterViewInit ");
 }
 ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked ");
 }
 ngAfterContentInit(): void {
  console.log("ngAfterContentInit ");
 }
 ngDoCheck(): void {
  console.log("ngDoCheck ");
 }
 ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges ");
 }
 ngOnInit(): void {
  console.log("ngOnInit ");
 }

 array=new Array(2,3,6,8,9,0);
 mulTable=new Array(1,2,3,4,5,6,7,8,9,10);

 gender:string='M'
 yellowcolor:string="bgcoloryellow";
 age!:number ;

 getAge(txtvalue:string)
 {
  this.age=(parseInt(txtvalue));
 }

 applyColor():string
 {
  if(this.age>18)
  return 'bgcoloryellow';
else
return 'bgcolorgray';
 }
}
