import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './employee/emp-add/emp-add.component';
import { EmpGetComponent } from './employee/emp-get/emp-get.component';
import { EmpDeleteComponent } from './employee/emp-delete/emp-delete.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmpAddComponent,
    EmpGetComponent,
    EmpDeleteComponent,
    EmpEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
