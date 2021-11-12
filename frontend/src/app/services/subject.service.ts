import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../model/subject';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getSubjects(){
    return this.http.get<Subject[]>(environment.apiURL + '/subject/todo');
  }

  newSubject(newSubject: Subject) {
    return this.http.post(environment.apiURL + '/subject/newSubject', newSubject);
  }

  addStudent(newStudent: Student, subjectName: string) {
    return this.http.post(environment.apiURL + '/subject/newStudent/' + subjectName, newStudent);
  }
}
