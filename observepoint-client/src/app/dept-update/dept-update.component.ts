import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../model/department';
import { DepartmentService } from '../service/department.service';


@Component({
  selector: 'app-dept-update',
  templateUrl: './dept-update.component.html',
  styleUrls: ['./dept-update.component.css']
})
export class DeptUpdateComponent implements OnInit {

  id: number;
  department: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentService) { 
   this.id=0;
   this.department=new Department();

    }

  ngOnInit() {
    

    this.id = this.route.snapshot.params['id'];
    
    this.departmentService.departmentDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));
  }

  updateDepartment() {
    
    this.departmentService.updateDepartment(this.id, this.department)
      .subscribe(data => {
        console.log(data);
        this.department = new Department();
        this.listdept();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDepartment();    
  }

  listdept() {
    this.router.navigate(['/listdept']);
  }
}
