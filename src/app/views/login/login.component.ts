import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  journalist:any
  token:any
  invalidLogin:boolean = false

  constructor(private authService:AuthService, private router:Router) { }

  logIn(credentials:any){
    this.authService.logInService(credentials).subscribe((res)=>{
      console.log(res)
      this.journalist = res
      let token = this.journalist.token
      localStorage.setItem('token',token)
      this.router.navigate(['/profile'])
    },(err)=>{
      console.log(err)
      if(err){
        this.invalidLogin = true
      }
    })
  }

  ngOnInit(): void {
  }

}
