import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/interfaces/newsModel';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  news:News = {}

  constructor(private newsService:NewsService, private router:Router, private route:ActivatedRoute) { }

  id:string = this.route.snapshot.params.id

  getSingleNews(){
    this.newsService.getSingleNewsService(this.id).subscribe((res)=>{
      this.news = res
    })
  }

  editNews(news:News){
    this.newsService.editNewsService(this.id,news).subscribe((res)=>{
      this.router.navigate(['/showNews'])
    },(err)=>{
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getSingleNews()
  }

}
