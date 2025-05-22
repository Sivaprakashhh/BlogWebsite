import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  @Input() post1: any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService: PostService){ }

  ngOnInit(): void {
    
  }

  onDelete(){
    this.onDeletePost.emit(this.post1);
  }
  
}
