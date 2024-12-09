import { Component, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundService } from '../../shared/background.service';
import { HttpClient } from '@angular/common/http';
import { PostInfo } from './post-detail.interface';
@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  blogId: string | null = null; // Variable to hold the blog ID
  postHeaderImgUrl: string = '/assets/images/blog/post1.png';
  postInfo : PostInfo = {title: '', content: '', created_at: '', primary_img_url: ''};
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private backgroundService: BackgroundService
  ) {}
  ngOnInit(): void {
     // Get the ID from the route parameters
     this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id'); // Extract the 'id' parameter
      this.http.get<any>(`blogPosts/${this.blogId}`).subscribe((result) => {
        console.log(result);
        // Get the URL or other parameter from the route
        this.backgroundService.updatePostDetailHeaderInfo(result);
        this.postInfo = result;
        console.log(this.postInfo);
      }, (error) => {
        console.error(error);
      });
    });
  }
}
