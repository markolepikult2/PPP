
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  posts: Post[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1').subscribe( (_posts: Post) => {
      this.post = _posts;
    });

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe( (_posts: Post[]) => {
      this.posts = _posts;
    });
  }

}
