import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmpDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';
import { AppComponent } from './app.component';
import { EmpGetComponent } from './employee/emp-get/emp-get.component';

const routes: Routes = [
  {path:'emp/',component:EmpGetComponent},
  {path:'emp/create',component:EmpAddComponent},
  {path:'emp/delete/:empId',component:EmpDeleteComponent},
  {path:'emp/edit/:empId',component:EmpEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
