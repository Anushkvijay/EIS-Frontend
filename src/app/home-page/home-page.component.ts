import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder,FormArray, Validators, FormGroup } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router, private userservice:UserService,private fb:FormBuilder,private service:EmployeeService) { }

  userDetails;
  ngOnInit() {
    this.userservice.getUserProfile().subscribe(
      res=>{this.userDetails = res;},
      err=>{console.log(err)}
    );
    
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  

}



