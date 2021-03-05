import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptUpdateComponent } from './dept-update/dept-update.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'department', pathMatch: 'full' }, 
  { path:'adddept',   component:DeptFormComponent},
  { path: 'listdept', component:DeptListComponent },
  { path: 'deptupdate/:id', component: DeptUpdateComponent },
  { path: 'deptdetails/:id', component: DeptDetailsComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' }, 
  { path:'addemp',   component:EmpFormComponent},
  { path: 'listemp', component:EmpListComponent },
  { path: 'empupdate/:id', component: EmpUpdateComponent },
  { path: 'empdetails/:id', component: EmpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
