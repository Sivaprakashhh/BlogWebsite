import { Component } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';


@Component({
  selector: 'app-blog',
  imports: [PostsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
