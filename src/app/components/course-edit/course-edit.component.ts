import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../../models/course';
import { Type } from '../../models/type';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.scss'
})
export class CourseEditComponent {
  id: number = 0
  form: FormGroup | null = null
  @Output() saved: EventEmitter<Course> = new EventEmitter<Course>
  @Input() courseData: Course | undefined = undefined
  types: any = Object.values(Type).filter(v => Number.isNaN(Number(v)));
  exceptions: boolean[] = [false, false, false, false, false, false,];
  isSaved = false;
  constructor(private courseScv: CoursesService, private router: ActivatedRoute) { }
  ngOnInit(): void {

    this.router.params.subscribe(params => {
      this.id = params['courseData'];
      this.courseData = this.courseScv.Courses.find(c => c.id == this.id)
      console.log(this.id,this.courseData,this.courseScv.Courses);
      this.form = new FormGroup(
        {
          courseName: new FormControl(this.courseData?.courseName, [Validators.required]),
          type: new FormControl(this.courseData?.type),
          numHours: new FormControl(this.courseData?.numHours, [Validators.required, Validators.max(80)]),
          dateOfStart: new FormControl(this.courseData?.dateOfStart),
          teacher: new FormControl(this.courseData?.teacher, [Validators.maxLength(10)]),
          softwares: new FormControl(this.courseData?.softwares[0])
        }
      )
    })

  }
  save() {
    if (this.form?.valid) {
      this.courseScv.editCourse(this.courseData!)
      this.isSaved = true;
    }
    else {
      this.exceptions = []
      Object.keys(this.form!.controls).map(key => this.exceptions.push(!this.form!.get(key)!.valid));
      alert('not valid')
    }
  }
}
