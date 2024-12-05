// import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post: any;
}
