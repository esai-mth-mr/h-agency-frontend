import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-blog',
  standalone: true,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [CommonModule, PostComponent],
})
export class BlogComponent {
  posts_1 = [
    {title: "How NVIDIA is Revolutionizing the AI Landscape in 2024", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post1.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post2.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post6.jpg", created_at:"AUGust 13, 2021 ", category: "hello"  },
  ]

  posts_2 = [
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post3.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post4.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post5.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
  ];
  posts_3 = [
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post3.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post4.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post5.jpg", created_at:"AUGust 13, 2021 ", category: "hello"},
  ];
}
