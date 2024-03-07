import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses-page',
  standalone: false,
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss'
})
export class CoursesPageComponent implements OnInit{
 constructor(private coursesSvc:CoursesService){
 }
coursesToView:Course[] =[]
myCourses:string[]=[]
searchedCourse:any |null= null
nameForSearch:string = ''
async ngOnInit() {
 this.coursesToView = this.coursesSvc.Courses;
}
hideSearched(){
  this.searchedCourse = null;
  this.nameForSearch = '';
}

joinCourse($event:any){
  this.myCourses.push($event.name)
}
cancelCourse($event:any){
  this.myCourses =this.myCourses.filter(c=>c!=$event.name)
}
addCourse($event:any){
this.coursesSvc.addCourse($event)
}
getByName(){
  this.coursesSvc.getCourseFromServer(this.nameForSearch).subscribe(res=>this.searchedCourse =res)
}
cancelAll(){
  this.myCourses = []
}
}
