import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  logOut(){
    this.authService.logOutService
    localStorage.removeItem('token')
  }

  get isLoggedIn(){
    let token = this.authService.getTokenService()
    if (token){
      return true
    }
    return false
  }

  ngOnInit(): void {
  }

}
