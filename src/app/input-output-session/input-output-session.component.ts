import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-session',
  templateUrl: './input-output-session.component.html',
  styleUrls: ['./input-output-session.component.css']
})
export class InputOutputSessionComponent {
@Input() readparentPropertyfromSideNav:string='';; 
}
