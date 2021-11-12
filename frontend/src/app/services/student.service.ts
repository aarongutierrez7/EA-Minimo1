import { Student } from './../model/student';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(environment.apiURL + '/student/todo')
  }

  addStudent(student: Student){
    return this.http.post(environment.apiURL + '/student/new', student)
  }
}