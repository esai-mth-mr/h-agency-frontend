import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundService } from '../../shared/background.service';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postHeaderImgUrl: string = '/assets/images/blog/post1.png';
  constructor(
    private route: ActivatedRoute,
    private backgroundService: BackgroundService
  ) {}
  ngOnInit(): void {
    // Get the URL or other parameter from the route
    console.log("dfdfdddddddddddddddddddddddddddddddd");
    this.backgroundService.setBackground(this.postHeaderImgUrl);
  }
}
