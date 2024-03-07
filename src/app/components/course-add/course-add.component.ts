import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../../models/course';
import { Type } from '../../models/type';

@Component({
  selector: 'app-course-add',
  standalone: false,
  templateUrl: './course-add.component.html',
  styleUrl: './course-add.component.scss'
})
export class CourseAddComponent {


  newCourse: Course = {id:0, courseName: '', type: Type.frontal, numHours: 0, dateOfStart: new Date(), teacher: '', softwares: [] }
  form: FormGroup | null = null
  @Output() saved: EventEmitter<Course> = new EventEmitter<Course>
  types: any = Object.values(Type).filter(v => Number.isNaN(Number(v)));
  exceptions: boolean[] = [false, false, false, false, false, false,]

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        courseName: new FormControl("", [Validators.required]),
        type: new FormControl(),
        numHours: new FormControl("", [Validators.required, Validators.max(80)]),
        dateOfStart: new FormControl(),
        teacher: new FormControl("", [Validators.maxLength(10)]),
        softwares: new FormControl()
      }
    )
  }
  save() {
    if (this.form?.valid) {
      this.saved.emit(this.newCourse)
      this.newCourse = { id:0,courseName: '', type: Type.computerized, numHours: 0, dateOfStart: new Date(), teacher: '', softwares: [] }
    }
    else {
      this.exceptions = []
      Object.keys(this.form!.controls).map(key => this.exceptions.push(!this.form!.get(key)!.valid));
      alert('not valid')
    }
  }
}
