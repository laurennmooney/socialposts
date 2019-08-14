import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() postIndex: number;
  @Output() onRemove = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removePost(index: number): void {
    this.onRemove.emit(index);
    // console.log("delete button clicked");
    // console.log(index);
  }

}
