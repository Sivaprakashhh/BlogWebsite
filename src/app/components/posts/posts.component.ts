import { Component, OnInit, Input } from '@angular/core';
//import { Posts } from '../../mock-posts';
import { PostComponent } from '../post/post.component';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostComponent], //commonModule for loop
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts:any;
  @Input() colClass: any;
  @Input() limit?: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log('Limit received:', this.limit);
    this.postService.getPosts().subscribe((retrievedData) => {
      this.posts = this.limit ? retrievedData.slice(0, this.limit) : retrievedData;
    });
  }
  deletePost(post:any) {

  this.postService.deletePost(post.id).subscribe(() => this.posts =this.posts.filter(
    (p:any) => p.id != post.id 
  ));
}
}
