import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  imports: [FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {

  id?: number;
  title?: string; //might have data in the future but not now
  content?: string;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.route.params.subscribe((parameters) => this.postService.getPost(parameters['id']).
    subscribe((retrievedPost) => { this.id = retrievedPost.id, this.title = retrievedPost.title, this.content = retrievedPost.content }
  ));
  }

  onSubmit() {
    const updatedPost = {
      id: this.id,
      title: this.title,
      content:this.content
    }

    this.postService.editPost(updatedPost).subscribe(() => this.router.navigate(['/blog']));
    
  };

}
