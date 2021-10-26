import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Journalist } from 'src/interfaces/journalistModel';

@Injectable({
  providedIn: 'root'
})
export class JournalistService {

  url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getProfileService(){
    return this.http.get<Journalist>(this.url + 'allJournalists')
  }

  addImageService(image:any){
    return this.http.post(this.url + 'profile/avatar', image)
  }
}
