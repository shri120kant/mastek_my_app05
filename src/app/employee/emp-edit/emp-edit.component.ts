import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  @Input()
  employee:Employee;
  
  constructor(private route:ActivatedRoute,private service:EmployeeService,private router:Router) { }

  ngOnInit() {
     }
  editEmployee(empId:any,desig:any){
    this.service.editEmployee(empId,desig);
    this.router.navigate(['/']);
  }

}

