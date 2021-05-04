import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private _empService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._empService.onGet();
  }

  onDelete(id: Number) {
    this._empService.onDelete(id);
  }

}
