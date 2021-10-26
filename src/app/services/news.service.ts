import { Injectable } from '@angular/core';
import { News } from 'src/interfaces/newsModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  showNewsService(){
    return this.http.get<News>(this.url + 'allNews')
  }

  addNewsService(news:News){
    return this.http.post(this.url + 'addNews', news)
  }

  editNewsService(news:News){
    return this.http.patch(this.url + 'updateNews', news)
  }

}
