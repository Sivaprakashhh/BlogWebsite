import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  title : any; //empty by default need ? or : any
  content: any;

  constructor(private postService: PostService, private router: Router){ }

  onSubmit() {
  this.postService.getPosts().subscribe(posts => {
    const lastNumericId = Math.max(...posts.map(p => +p.id || 0));
    const newPost = {
      id: String(lastNumericId + 1), // ✅ convert to string
      title: this.title,
      content: this.content
    };

    this.postService.addPost(newPost).subscribe(() => this.router.navigate(['/blog']));
    });
  };
}

