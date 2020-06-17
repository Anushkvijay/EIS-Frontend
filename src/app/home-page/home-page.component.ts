import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router, private service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    );
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
