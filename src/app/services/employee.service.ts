import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Create Array
  employees: Employee[] = [
    {
      id: 1,
      name: 'Prasad',
      email: 'prk@gmail.com',
      phone: 111
    },
    {
      id: 2,
      name: 'Mahesh',
      email: 'Mah@gmail.com',
      phone: 222
    },
    {
      id: 3,
      name: 'Poonam',
      email: 'pook@gmail.com',
      phone: 333
    }
  ];

  constructor() { }

  onGet() {
    return this.employees;
  }

  onAdd(emp: Employee) {
    this.employees.push(emp);
  }

  onDelete(id: Number) {
    let emp = this.employees.find(x => x.id === id);
    let index = this.employees.indexOf(emp, 0);
    this.employees.splice(index, 1);
  }

  onGetEmployee(id: Number) {
    return this.employees.find(x => x.id === id);
  }

  onUpdate(employee: Employee) {
    let oldEmp = this.employees.find(x => x.id === employee.id);
    oldEmp.name = employee.name;
    oldEmp.email = employee.email;
    oldEmp.phone = employee.phone;
  }
}
