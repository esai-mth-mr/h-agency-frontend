import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [CommonModule, PostComponent],
})
export class BlogComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log("ng")
    this.http.get<any>('/blogPosts').subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.error(error)
      console.log("error");
    })
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
