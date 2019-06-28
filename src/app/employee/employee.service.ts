import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   uri = 'http://localhost:4000/emp';
  constructor(private httpClient:HttpClient) {
   }
   getEmployees():Observable<Employee[]>{
     return this.httpClient.get<Employee[]>(`${this.uri}`+'/allemp');
   }

    addEmployee(id,name,desig){
      let emp={
        empId:id,
        empName:name,
        designation:desig
      };
      return this.httpClient.post(`${this.uri}`+'/addEmp',emp)
      .subscribe(res=>console.log("New Employee Registered Successfully"));
    }

    deleteEmployee(empId:number){
     return this.httpClient.delete(`${this.uri}`+'/delete/'+`${empId}`)
          .subscribe(res => console.log('Done'));
    }

    editEmployee(empId,desig) {
      return this.httpClient.put(`${this.uri}`+'/update/'+empId+'/'+desig,{}).subscribe(res => console.log('Done'));
      }

}
