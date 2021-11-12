import { SubjectsComponent } from './subjects/subjects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio'},
  { path: 'inicio', component: SubjectsComponent},
  { path: 'newPerson', component: SubjectFormComponent},
  { path: 'newVaccine', component: StudentFormComponent},
  { path: 'newVaccine/:subjectName', component: StudentFormComponent},
  { path: 'vaccines', component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
