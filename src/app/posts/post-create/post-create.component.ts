import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent {
  constructor(private postsService: PostsService) {}
  onAddPost(form: NgForm) {
    console.log(form.valid);
    if (form.invalid) {
      return;
    }
    const title: string = form.value.title;
    const content: string = form.value.content;
    this.postsService.addPost(title, content);
  }
}
