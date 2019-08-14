import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  submitPost(newPostForm: NgForm): void {
    this.submitted.emit({
      title: newPostForm.value.title,
      thought: newPostForm.value.thought
    });
    console.log("submit button clicked")
    console.log(newPostForm);
  }

  ngOnInit() {
  }

}
