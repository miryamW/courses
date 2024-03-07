import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { LoginComponent } from './components/login/login.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'courses-list', component:CoursesPageComponent,
  children:[{path:'edit/:courseData',component:CourseEditComponent}]},
  {path:'contact-us', component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:courseData',component:CourseEditComponent},
  {path:'notfound',component:NotFoundComponent},
  {path:'**',redirectTo:'/notfound'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
