import {Component, OnInit} from '@angular/core';
import {Employee} from "./Employee";
import {EmployeeService} from "./employee.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ui';
  public employees: Employee[] = [];
  public editingEmployee: Employee | null = null;
  public deletingEmployee: Employee | null = null;

  constructor(private employeeService:EmployeeService) {
  }

  private getEmployees():void{
    this.employeeService.getAllEmployees().subscribe(
      (response:Employee[]):void =>{
        this.employees = response;
      },
      (error):void =>{
        alert(error.message);
      }
    )
  }

  ngOnInit(): void {
    this.getEmployees();

  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(
      (response:Employee):void =>{
        this.getEmployees();
    },
      (error):void =>{
        alert(error.message);
      }
    )
  }

  onPreEdit(employee: Employee) {
    this.editingEmployee = employee;
  }

  editEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe(
      (response:Employee):void =>{
        this.getEmployees();
      },
      (error):void =>{
        alert(error.message);
      }
    )

  }

  onPreDelete(employee: Employee) {
    this.deletingEmployee = employee;

  }

  deleteEmployee(employee: Employee | null) {
    if(employee){
      this.employeeService.deleteEmployee(employee.id).subscribe(
        (response:void):void =>{
          this.getEmployees();
        },
        (error):void =>{
          alert(error.message);
        }
      )

    }

  }

  searchEmployees(key: any) {
    let result:Employee[] =[];

    // @ts-ignore
    for (let employee:Employee of this.employees){
      if (employee.name.indexOf(key) !== -1
        || employee.title.indexOf(key) !== -1
        || employee.email.indexOf(key) !== -1
        || employee.phone.indexOf(key) !== -1
      ){
        result.push(employee);
      }
    }

    if(!key){
      this.getEmployees();
    }else {
      this.employees = result;
    }


  }
}
