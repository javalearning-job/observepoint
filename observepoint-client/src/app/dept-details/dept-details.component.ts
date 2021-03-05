import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DepartmentService } from '../service/department.service';
import { DeptListComponent } from '../dept-list/dept-list.component';
import { Department } from '../model/department';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  id: number;
  department: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private departmentService: DepartmentService) { 
      this.department = new Department();
      this.id=0;
    }

  ngOnInit(): void {
    

    this.id = this.route.snapshot.params['id'];
    
    this.departmentService.departmentDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.department = data;
      }, error => console.log(error));
  }
  listdept(){
    this.router.navigate(['listdept']);
  }
}
