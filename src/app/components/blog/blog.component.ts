import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { Post } from './blog.interface';
@Component({
  selector: 'app-blog',
  standalone: true,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [CommonModule, PostComponent],
})
export class BlogComponent implements OnInit {

  categorizedPosts: { [key: string]: Post[] } = {};
  categories: string[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    
    this.http.get<any[]>('/api/blogPosts').subscribe((result) => {
      console.log(result);
      // Group posts by category
    this.categorizedPosts = result.reduce<{ [key: string]: Post[] }>((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, { });
    // Get unique categories
    this.categories = Object.keys(this.categorizedPosts);
    }, (error) => {
      console.error(error);
    });    
  };
}
