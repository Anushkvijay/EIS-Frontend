import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder,FormArray, Validators, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-pert-employees',
  templateUrl: './pert-employees.component.html',
  styleUrls: ['./pert-employees.component.css']
})
export class PertEmployeesComponent implements OnInit {

  employeeDetailForms: FormArray = this.fb.array([]);
  // deptList = [];
  notification = null;

  constructor(private router:Router, private userservice:UserService,private fb:FormBuilder,private service:EmployeeService) { }

  userDetails;
  ngOnInit() {
    this.userservice.getUserProfile().subscribe(
      res=>{this.userDetails = res;},
      err=>{console.log(err)}
    );
    // this.deptService.getDepartmentList()
    //   .subscribe(res => this.deptList = res as []);

    this.service.getEmployeeDetailList().subscribe(
      res => {
        if (res == [])
          this.addEmployeeDetailForm();
        else {
          //generate formarray as per the data received from BankAccont table
          (res as []).forEach((employeeDetail: any) => {
            this.employeeDetailForms.push(this.fb.group({
              emplID: [employeeDetail.emplID],
              firstName: [employeeDetail.firstName, Validators.required],
              lastName: [employeeDetail.lastName],
              // deptID: [employeeDetail.deptID, Validators.min(1)],
              email: [employeeDetail.email, [Validators.required,Validators.email]],
              dob: [employeeDetail.dob, Validators.required],
              // project: [employeeDetail.project],
              contact: [employeeDetail.contact, Validators.required],
              emrgncyContact: [employeeDetail.emrgncyContact],
              address: [employeeDetail.address],
              // workHours: [employeeDetail.workHours],
              pancard: [employeeDetail.pancard, Validators.required],
              // pto: [employeeDetail.pto]
            }));
          });
        }
      }
    );
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  addEmployeeDetailForm() {
    this.employeeDetailForms.push(this.fb.group({
      emplID: [0],
      firstName: ['', Validators.required],
      lastName: [''],
      // deptID: [0, Validators.min(1)],
      email: ['', [Validators.required,Validators.email]],
      dob: ['', Validators.required],
      // project: [''],
      contact: ['', Validators.required],
      emrgncyContact: [''],
      address: [''],
      // workHours: [''],
      pancard: ['', Validators.required],
      // pto: ['']
    }));
  }

  recordSubmit(fg: FormGroup) {
    if (fg.value.emplID == 0)
      this.service.postEmployeeDetail(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ emplID: res.emplID });
          this.showNotification('insert');
        })
    else
      this.service.putEmployeeDetail(fg.value).subscribe(
        (res: any) => {
          
          this.showNotification('update');
        });
  }

  onDelete(emplID, i) {
    if (emplID == 0)
      this.employeeDetailForms.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.service.deleteEmployeeDetail(emplID).subscribe(
        res => {
          this.employeeDetailForms.removeAt(i);
          this.showNotification('delete');
        });
  }

  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved!' };
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated!' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted!' };
        break;

      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
}
