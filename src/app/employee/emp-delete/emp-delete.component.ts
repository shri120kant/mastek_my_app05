import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrls: ['./emp-delete.component.css']
})
export class EmpDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private Service:EmployeeService) { }

  ngOnInit() {
    let empId=this.route.snapshot.paramMap.get("empId");
   this.deleteEmployee(empId);
  }
  deleteEmployee(empId){
    this.Service.deleteEmployee(empId);
}

}
