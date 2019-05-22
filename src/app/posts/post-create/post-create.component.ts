import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: [
    './post-create.component.scss'
  ]
})
export class PostCreateComponent{
  postTitle = '';
  postContent = '';
  @Output()
  postAdded = new EventEmitter<Post>();

  onAddPost(){
    const post: Post = {title: this.postTitle, content: this.postContent};
    this.postAdded.emit(post);
  }
}
