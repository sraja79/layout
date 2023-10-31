import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef) { 
    ele.nativeElement.style.background='red';
    ele.nativeElement.style.color='white';
    ele.nativeElement.style.fontSize='20px';
  }

}
