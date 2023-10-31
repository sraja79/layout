import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
parentProp_From_Appcomp:string ="I am an exaple of Input Decorator used to access the parent value from child component";
  /**
   *
   */
  constructor(private router:Router) {

  }
  yr="";
  @ViewChild(SideNavComponent) VCChild!:SideNavComponent;
  ngAfterViewInit() {
    setTimeout(() => {
    this.yr=this.VCChild.myyear;
    });
    }

  title = 'AngularPratices';
  sideNanStatusparent=true;
  Navigate()
  {
    this.router.navigate(['Interpolation'])
  }
  }
