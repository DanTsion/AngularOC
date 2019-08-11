import { Component, OnInit } from '@angular/core';
import { Post } from '../assets/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

title :string = "Liste des posts !"

arrayPosts : Post[] = null;


 ngOnInit() {
  this.arrayPosts = [
    {
      _title : "title 1",
      _content : "content 1",
      _created_at : new Date(), 
      _loveIts : 0
    },
    {
      _title : "title 2",
      _content : "content 2",
      _created_at : new Date(), 
      _loveIts : 1
    },
    {
      _title : "title 3",
      _content : "content 3",
      _created_at : new Date(), 
      _loveIts : -1
    },
    {
      _title : "title 4",
      _content : "content 4",
      _created_at : new Date(), 
      _loveIts : 5
    }
  ];
 }

}
