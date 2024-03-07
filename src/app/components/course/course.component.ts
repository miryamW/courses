import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course';
@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit{
@Input() isEven:boolean = false
@Input() courseData:Course|null = null
@Output() listAdd = new EventEmitter<any>()
@Output() listRemove = new EventEmitter<any>()
link:string = ''
join:boolean = false
d:Date =  new Date()
dateOfStart:Date|null = null
ngOnInit(){
  this.link = `edit/${this.courseData?.id}`
  this.dateOfStart = new Date(this.courseData!.dateOfStart);
}
btnjoin() {
  this.join = true
  this.listAdd.emit({name:this.courseData?.courseName})
  }
btndisjoin() {
  this.join = false
  this.listRemove.emit({name:this.courseData?.courseName})

 }

}
