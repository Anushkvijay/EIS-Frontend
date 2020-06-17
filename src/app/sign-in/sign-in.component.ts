import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service:UserService, private router:Router, private toastr:ToastrService) { }

  formModel = {
    UserName:'',
    Password:''
  }
  ngOnInit() {
    if(localStorage.getItem('token')!= null)
    this.router.navigateByUrl('/home');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl("/home");
      },
      err =>{
        if(err.status == 400)
        this.toastr.error('Incorrect Username or Password','Authentication Failed'); 
        else console.log(err);  
      }
    )
  }
}
