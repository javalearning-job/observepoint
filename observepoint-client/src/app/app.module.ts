import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptFormComponent } from './dept-form/dept-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptUpdateComponent } from './dept-update/dept-update.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    DeptFormComponent,
    DeptListComponent,
    DeptDetailsComponent,
    DeptUpdateComponent,
    EmpListComponent,
    EmpFormComponent,
    EmpDetailsComponent,
    EmpUpdateComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
