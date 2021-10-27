import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  signUpService(journalist:any){
    return this.http.post(this.url + 'addJournalist', journalist)
  }

  logInService(credentials:any){
    return this.http.post(this.url + 'login', credentials)
  }

  logOutService(){
    return this.http.delete(this.url + 'logout')
  }
  getTokenService(){
    return localStorage.getItem('token')
  }
}
