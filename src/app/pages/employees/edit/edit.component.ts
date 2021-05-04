import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
//import { EmployeesComponent } from '../employees.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;

  header: string;

  employee: Employee = {
    id: 0,
    name: '',
    phone: 0,
    email: ''
  };

  constructor(private _route: ActivatedRoute,
    private _empService: EmployeeService,
    private _router: Router) {
  }

  ngOnInit(): void {
    //Get ID from URL 
    this.id = +this._route.snapshot.paramMap.get('id');

    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';

    //On Edit get employee:
    if (this.id != 0) {
      this.employee = this._empService.onGetEmployee(this.id);
    }

  }

  onSubmit(form: NgForm) {
    //console.log(form.value);

    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone
    }

    if (this.id === 0) {
      this._empService.onAdd(employee);
    }
    else {
      this._empService.onUpdate(employee);
    }

    //After adding naigate to home page to empty url.
    this._router.navigateByUrl('');
  }

}
