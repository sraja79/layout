import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courseList:any=[
    { id:1, language:'C'  },
    { id:2, language:'R'  },
    { id:3, language:'C++'  },
    { id:4, language:'Angular'  },
    { id:5, language:'React'  }

  ]
}
