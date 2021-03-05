import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartmentService } from '../service/department.service';
import { Department } from '../model/department';


@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments:Department[]=[];

  constructor(private router:Router,private departmentService:DepartmentService) { }

  ngOnInit(): void {

    this.reloadData();
    
  }

  reloadData(){
    this.departmentService.listDepartments().subscribe(data =>{
      this.departments=data;
     });
  }

  updateDepartment(deptId: number){
    this.router.navigate(['deptupdate', deptId]);
  }

  departmentDetails(deptId: number){
    this.router.navigate(['deptdetails', deptId]);
  }

  deleteDepartment(deptId: number) {
    this.departmentService.deleteDepartment(deptId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  
}
