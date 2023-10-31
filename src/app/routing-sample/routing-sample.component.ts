import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-sample',
  templateUrl: './routing-sample.component.html',
  styleUrls: ['./routing-sample.component.css']
})
export class RoutingSampleComponent {
  /**
   *
   */
  constructor(private router:Router) {
   console.log(router);
    
  }
  NavigateMe()
  {
 this.router.navigateByUrl("Bindings");
  }
}
