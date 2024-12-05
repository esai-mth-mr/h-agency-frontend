import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  imports: [CommonModule],
})
export class BlogComponent {
  posts = [
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post1.jpg", created_at:""},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post2.jpg", created_at:""},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post3.jpg", created_at:""},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post4.jpg", created_at:""},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post5.jpg", created_at:""},
    {title: "AI-Powered Predictive Maintenance in Manufacturing", content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.", imgUrl: "/assets/images/blog/post6.jpg", created_at:""},
  ]
}
