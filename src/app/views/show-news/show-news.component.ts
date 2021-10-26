import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  news:any

  constructor(private newsService:NewsService, private router:Router) { }

  showNews(){
    this.newsService.showNewsService().subscribe((res)=>{
      this.news = res
    },(err)=>{
      console.log(err)
    })
  }

  editNews(id:any){
    this.router.navigate(['/editNews/' + id])
  }

  ngOnInit(): void {
    this.showNews()
  }

}
