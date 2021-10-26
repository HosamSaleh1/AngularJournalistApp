import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/interfaces/newsModel';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:News = {}

  constructor(private newsService:NewsService, private router:Router) { }

  addNews(news:any){
    this.newsService.addNewsService(news).subscribe((res)=>{
      this.news = res
      this.router.navigate(['/showNews'])
    })
  }




  ngOnInit(): void {
  }

}
