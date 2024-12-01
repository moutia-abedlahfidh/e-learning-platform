import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  constructor(private service : MyserviceService,private cookies : CookieService,private route : Router) {}
  
  public Courses : any ;
  ngOnInit(): void {
    this.getCourses();
  }
  public getCourses() {
    this.service.getCoursesById(11).subscribe(
      res=>{
        this.Courses = res ;
        console.log(this.Courses);
      },
      err=>{
        console.log(err);
        return err ;
      }
    ) ;
  }

}
