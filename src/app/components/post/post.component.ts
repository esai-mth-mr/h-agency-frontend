// import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post',
  standalone: true,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  constructor(private router: Router) {};
  @Input() post: any;
  ngOnInit() {
    console.log(this.post);
  }
  viewPost() {
    console.log("clicked"
    )
    this.router.navigate(['/blog/post', this.post.id]);
  }
}
