import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalistService } from 'src/app/services/journalist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  journalist:any
  file:any

  constructor(private journalistService:JournalistService, private router:Router) { }

  getProfile(){
    this.journalistService.getProfileService().subscribe((res)=>{
      this.journalist = res
    },(err)=>{
      console.log(err)
    })
  }

  handleUpload(event:any){
    this.file = event.target.files
  }

  uploadFile(){
    const myData = new FormData()
    for(let i = 0; i< this.file.length; i++){
      myData.append('avatar', this.file[i])
    }
    this.journalistService.addImageService(myData).subscribe(()=>{})
    window.location.reload()
  }

  addNews(){
    this.router.navigate(['/addNews'])
  }

  ngOnInit(): void {
  }

}
