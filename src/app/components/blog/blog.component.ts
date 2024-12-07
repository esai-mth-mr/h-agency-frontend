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

  posts: Post[] = [
    { id: 1, title: 'Angular Basics', content: '...', category: 'Programming' },
    { id: 2, title: 'Healthy Diet', content: '...', category: 'Health' },
    { id: 3, title: 'JavaScript Tips', content: '...', category: 'Programming' },
    { id: 4, title: 'Workout Tips', content: '...', category: 'Health' },
    { id: 5, title: 'Travel Guide', content: '...', category: 'Travel' }
  ];

  categorizedPosts: { [key: string]: Post[] } = {};
  categories: string[] = [];


  constructor(private http: HttpClient) {}
  ngOnInit() {
    // this.http.get<any[]>('/blogPosts').subscribe((result) => {
    //   console.log(result);
    //   // Group posts by category
    // this.categorizedPosts = result.reduce<{ [key: string]: Post[] }>((acc, post) => {
    //   if (!acc[post.category]) {
    //     acc[post.category] = [];
    //   }
    //   acc[post.category].push(post);
    //   return acc;
    // }, { });

    // // Get unique categories
    // this.categories = Object.keys(this.categorizedPosts);
    // console.log(this.categorizedPosts);
    // }, (error) => {
    //   console.error(error);
    // });
    
  };
  posts_1 = [
    {id:1, title: "How NVIDIA is Revolutionizing the AI Landscape in 2024", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post1.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:2, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post2.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:3, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post3.png", created_at:"AUGust 13, 2021 ", category: "hello"  },
  ]
  posts_2 = [
    {id:4, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post4.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:5, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post5.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:6, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post6.png", created_at:"AUGust 13, 2021 ", category: "hello"},
  ];
  posts_3 = [
    {id:7, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post7.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:8, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post8.png", created_at:"AUGust 13, 2021 ", category: "hello"},
    {id:9, title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post9.png", created_at:"AUGust 13, 2021 ", category: "hello"},
  ];
}
