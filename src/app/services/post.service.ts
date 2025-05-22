import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //tells js that function has to be observed
import { Post } from '../Post';

//injectable says that this service can be injected wherever we want in this project
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { } //executed once class initiated

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl); //retrieve data
    //this.http.post(); //send/store data
    //this.http.put(); //update data
    //this.http.delete(); //delete data
  }
  deletePost(id:number): Observable<Post>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url);
  }

  addPost(post: any): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, post);
  }

  editPost(post: any): Observable<Post>{
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }
  getPost(id:number): Observable<Post>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
