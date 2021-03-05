import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../model/department';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  employee: Employee ;
  submitted = false;
  departments:Department []=[];

  constructor(private employeeService: EmployeeService,
    private router: Router) {
      this.employee = new Employee();
     }

  ngOnInit() {
   this.getDepartmentList();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    
    this.employeeService
    .saveEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  getDepartmentList(){
    this.employeeService.getDepartmentList().subscribe(data => {
      this.departments=data;
      console.log(data)
   });

  }
  gotoList() {
    this.router.navigate(['/listemp']);
  }


}
