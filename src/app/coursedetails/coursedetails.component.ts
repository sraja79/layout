import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
/**
 *
 */
id!:string;
constructor(private activeroute:ActivatedRoute) {

  
}
  ngOnInit(): void {
    this.id=this.activeroute.snapshot.paramMap.get('id') as string;
    console.log('************', this.id);
  }


}
