import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../service/department.service';
import { Department } from '../model/department';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  department:Department;
  constructor(private router:Router,private departmentService:DepartmentService) { 
  this.department = new Department();

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.departmentService.saveDepartment(this.department).subscribe(result => this.gotoDepartmentList());
  }
  gotoDepartmentList() {
    this.router.navigate(['/listdept']);
  }
}
