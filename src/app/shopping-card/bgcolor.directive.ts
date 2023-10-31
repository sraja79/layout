import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {


  constructor(private eleref:ElementRef) { 
   // eleref.nativeElement.style.background="lightgreen";

  }

  @HostListener('mouseover') onMouseOver(): any
  {
    this.eleref.nativeElement.style.background="lightgreen";
    
  }

  @HostListener('mouseleave') onMouseLeave(): any
  {
    this.eleref.nativeElement.style.background="";
    
  }

}
