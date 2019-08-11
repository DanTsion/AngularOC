import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../assets/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input()postUnique : Post = null; 

  onClickLove() {
    this.postUnique._loveIts++;
  }
  onClickDontLove() {
    this.postUnique._loveIts--;
  }
  ngOnInit() {
  }

}
