import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { 
   this.id=0;
   this.employee=new Employee();
    }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.employeeDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));

  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.listdept();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmployee();    
  }

  listdept() {
    this.router.navigate(['/listemp']);
  }
}
