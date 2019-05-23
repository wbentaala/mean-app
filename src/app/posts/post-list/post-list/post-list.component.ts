import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];
  ngOnInit(): void {
     this.posts = this.postsService.getPosts();
  }
  constructor(private postsService: PostsService){

  }

}
