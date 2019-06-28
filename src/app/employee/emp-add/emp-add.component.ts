import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {
  angForm:FormGroup
  constructor(private route:ActivatedRoute,private service:EmployeeService,private fb: FormBuilder) {
    this.createForm();
   }
  
  ngOnInit() { 
  }

  createForm(){
    this.angForm=this.fb.group({
      empId:['',Validators.required],
      empName:['',Validators.required],
      designation:['',Validators.required]
    });
  }

  addEmployee(empId,empName,designation){
    this.service.addEmployee(empId,empName,designation);
  }
}
