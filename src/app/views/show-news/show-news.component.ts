import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  news:News [] = []

  constructor(private newsService:NewsService, private router:Router, private route:ActivatedRoute) { }

  showNews(){
    this.newsService.showNewsService().subscribe((res)=>{
      this.news = res
    },(err)=>{
      console.log(err)
    })
  }

  deleteNews(news:News){
    this.newsService.deleteNewsService(news._id).subscribe(()=>{
      let index = this.news.indexOf(news)
      this.news.splice(index,1)
    })
  }

  ngOnInit(): void {
    this.showNews()
  }

}
