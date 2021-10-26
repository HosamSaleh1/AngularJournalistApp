import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Journalist } from 'src/interfaces/journalistModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  invalidEmail:boolean = false
  invalidAge:boolean = false
  journalist:Journalist = {}
  token:any

  constructor(private authService:AuthService, private router:Router) { }

  signUp(journalist:Journalist){
    this.authService.signUpService(journalist).subscribe((res)=>{
      this.journalist = res
      this.token = this.journalist.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(err)=>{
      console.log(err)
    })
  }




  ngOnInit(): void {
  }

}
