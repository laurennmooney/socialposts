import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  show: boolean = false;
  
  posts: Post[] = [
    {
      title: "YAY",
      thought: "I finished!"
    },
    {
      title: "Haaalp",
      thought: "I want to cry"
    },
    {
      title: "Angular",
      thought: "Angular is kind of overwhelming"
    },
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPost: Post): void {
    this.posts.unshift(newPost);
    this.toggleForm();
  }

  // the handler for the delete button on the post component. the post component contains the event emitter. the event emitter is then plugged into the remove button on the post component to call the onRemoveHandler
  onRemoveHandler(index: number): void {
    this.posts.splice(index, 1);
  }

  toggleForm() {
    this.show = !this.show;
  }


}
