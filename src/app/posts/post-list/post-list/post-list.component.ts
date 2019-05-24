import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubb: Subscription;

  ngOnInit(): void {
     // this.posts = this.postsService.getPosts();
     this.postsSubb = this.postsService.getpPostsUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postsSubb.unsubscribe();
  }

  constructor(private postsService: PostsService){
  }

}
