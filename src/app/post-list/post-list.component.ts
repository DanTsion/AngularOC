import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../assets/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input()tableau : Post[]= [];

  ngOnInit() {
  }

}
