import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
    this.getCoursesFromServer()
  }
  private courses: Course[] = []
  getCoursesFromServer() {
    this.http.get('https://localhost:44337/api/Course/GetAllCourses').subscribe((res: any) => res.forEach((c: any) => this.Courses.push(c)));
  }
  getCourseFromServer(name: string) {
    return this.http.get(`https://localhost:44337/api/Course/GetCourseByName/${name}`);
  }
  public get Courses() {
    return this.courses
  }
  addCourse(c: Course) {
    this.courses.push(c)
    this.http.post('https://localhost:44337/api/Course/AddCourse', { body: c }).subscribe(res => { })
  }
  editCourse(c: Course) {
    this.courses.push(c)
    this.http.put(`https://localhost:44337/api/Course/EditCourse/${c.id}`, { body: c }).subscribe(res => { })
  }
}

