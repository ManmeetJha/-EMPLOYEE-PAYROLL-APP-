import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee-component/create-employee/create-employee.component';
import { EmployeeDashboardComponent } from './employee-component/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: "create", component: CreateEmployeeComponent },
  { path: "", component: EmployeeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
