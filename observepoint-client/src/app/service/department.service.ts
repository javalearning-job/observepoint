import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  
  private deptUrl: string;

  constructor(private http: HttpClient) {
    this.deptUrl = 'http://localhost:8080/departments';
  }

  
  public saveDepartment(dept: Department) {
    return this.http.post<Department>(`${this.deptUrl}`, dept);
  }

  public listDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.deptUrl}`);
  }

  updateDepartment(deptId: number, value: any): Observable<Object> {
    return this.http.put(`${this.deptUrl}/${deptId}`, value);
  }

  departmentDetails(deptId: number): Observable<any> {
    return this.http.get(`${this.deptUrl}/${deptId}`);
  }

  public deleteDepartment(deptId: number) {
    return this.http.delete(`${this.deptUrl}/${deptId}`, { responseType: 'text' });
  }


}
