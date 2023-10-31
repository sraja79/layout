import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
myyear="2022";
  sideMenuList:any=[
    {menuName:"Interpolation",icon:"fa-solid fa-house",actionUrl:"Interpolation"},
    {menuName:"Bindings",icon:"fa-solid fa-chart-line",actionUrl:"Bindings"},
    {menuName:"Directives",icon:"fa-solid fa-chart-line",actionUrl:"Directives"},
    {menuName:"pipe",icon:"fa-solid fa-chart-line",actionUrl:"pipe"},

    {menuName:"Input Output and Session",icon:"fa-solid fa-chart-line",actionUrl:"Input Output and Session"},
    {menuName:"Parent",icon:"fa-solid fa-chart-line",actionUrl:"Parent"},
    {menuName:"Child",icon:"fa-solid fa-chart-line",actionUrl:"Child"},
    {menuName:"User Registration",icon:"fa-solid fa-chart-line",actionUrl:"User Registration"},
    {menuName:"ReactiveComponent",icon:"fa-solid fa-chart-line",actionUrl:"ReactiveComponent"},
    {menuName:"Shopping Card",icon:"fa-solid fa-chart-line",actionUrl:"Shopping Card"},
    {menuName:"Routing",icon:"fa-solid fa-chart-line",actionUrl:"Routing"},
    {menuName:"course",icon:"fa-solid fa-chart-line",actionUrl:"course"},
    {menuName:"lazyloading",icon:"fa-solid fa-chart-line",actionUrl:"lazyloading"},
    
    
    
    
  
    
    

  ];
  activemenu="";

  @Input() sideNavStatus:boolean=false;
  @Input() ReadAppcompPropinSideNav:string='';// This Property read the app component property value
  setActiveMenu(activemenu:string)
  {
   
   this.activemenu=activemenu;
  }
}
