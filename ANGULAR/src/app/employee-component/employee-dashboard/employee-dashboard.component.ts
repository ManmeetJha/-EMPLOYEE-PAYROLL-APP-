import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/Services/user-services.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  employees:any;
  color:any;
  dataRefresher:any;

  constructor(private employeeService: UserServicesService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
   
  }

  reloadData() {
    this.employeeService.getEmployeesList().subscribe((response:any)=>{
      console.log("Response is ====> ",response.data)
       this.employees = response.data;
    })
  }

  deleteEmployee(id:number) {
    console.log(id)
     this.employeeService.deleteEmployee(id)
       .subscribe((response:any) => {
         console.log(response)
         this.reloadData();
       })
  }

  changeColorOne() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
     return '#f6f6f6';
    }
 }

 route(){
  this.router.navigate(["/create-employee"])
}





}