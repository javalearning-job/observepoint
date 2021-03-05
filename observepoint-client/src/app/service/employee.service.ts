import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empUrl:string;
  department:Department[]=[]
  constructor(private http: HttpClient,private departmentService:DepartmentService) { 
    this.empUrl = 'http://localhost:8080/employees';
  }

  employeeDetails(id: number): Observable<any> {
    return this.http.get(`${this.empUrl}/${id}`);
  }

  saveEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.empUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.empUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.empUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.empUrl}`);
  }
  getDepartmentList():Observable<any>{
    return this.departmentService.listDepartments();
  }
}