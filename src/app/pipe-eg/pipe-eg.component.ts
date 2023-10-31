import { Component } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-pipe-eg',
  templateUrl: './pipe-eg.component.html',
  styleUrls: ['./pipe-eg.component.css']
})
export class PipeEgComponent {

  nameCaps:string='BOOPATHI';
  nameSmall:string='boopathi';
  price:number=100;
  pi:number=3.1487342848;
   mydate=new Date('2023-10-9');
  firstname:string ='boopathi';
  lastname:string='raja';

  users:Users[]=[
    {Id:1,Name:'Boopathi',Gender:'M'},
    {Id:2,Name:'Rajesh',Gender:'M'},
    {Id:3,Name:'Asoken',Gender:'M'},
    {Id:4,Name:'Rani',Gender:'F'}
  ]
}
