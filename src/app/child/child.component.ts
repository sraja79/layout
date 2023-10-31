import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() userName = '';
  lifecycleTicks: number = 0;
  @Output() childEvent:EventEmitter<string>=new EventEmitter<string>();
  childName:string='Boopathi';

emitdata2PArent()
{
  this.childEvent.emit(this.childName);
  
}

  ngOnChanges(changes:SimpleChanges) {
    console.log('ngOnChanges triggered', changes);
 }


 ngOnInit() {
   this.lifecycleTicks++;
   console.log('ngOnChanges triggered', this.lifecycleTicks);
 }

}
