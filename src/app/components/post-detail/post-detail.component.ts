import { Component, input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BackgroundService } from '../../shared/background.service';
import { HttpClient } from '@angular/common/http';
import { PostInfo } from './post-detail.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  blogId: string | null = null; // Variable to hold the blog ID
  postHeaderImgUrl: string = '/assets/images/blog/post1.png';
  postInfo : PostInfo = {title: '', content: '', created_at: '', primary_img_url: ''}; //this is current post.  
  postArray: any = [];
  private arrowDirectionSubscription: Subscription | null = null;
  constructor(
    private router: Router, 
    private http: HttpClient,
    private route: ActivatedRoute,
    private backgroundService: BackgroundService
  ) {}
  //when you click prev and next button in the blog
  updatePost(direction: string):void {
    console.log("oreererrerer", direction
    )
    if(this.postArray.length ==3 && direction == "next") {
      this.blogId = this.postArray[2];
    }
    if(this.postArray.length ==3 && direction == "previous") {
      this.blogId = this.postArray[0];
    }

    if(this.postArray.length ==2 && direction == "next") {
      this.blogId = this.postArray[1];
    }
    if(this.postArray.length ==2 && direction == "previous") {
      this.blogId = this.postArray[0];
    }
    this.http.get<any>(`api/blogPosts/${this.blogId}`).subscribe((result) => {
      this.postArray = [];
      this.postArray = result.result ? result.result.map((item: any) => item.user_id) : [];
      this.router.navigate([`blog/${this.blogId}`]);
      if(result.status == "previous" && result.result?.length > 0)
        {
          this.postInfo = result.result[0];
        }
      else if(result?.result?.length > 1) this.postInfo = result.result[1];
      // Get the URL or other parameter from the route
      this.backgroundService.updatePostDetailHeaderInfo(result);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
  ngOnInit(): void {

    
     // Get the ID from the route parameters
     this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id'); // Extract the 'id' parameter
      this.http.get<any>(`api/blogPosts/${this.blogId}`).subscribe((result) => {
        
        this.postArray = [];
        this.postInfo = {title: '', content: '', created_at: '', primary_img_url: ''};
        // }
        this.postArray = result.result ? result.result.map((item: any) => item.user_id) : [];

        if(result.status == "previous" && result.result?.length > 0)
          {
            this.postInfo = result.result[0];
          }
        else if(result?.result?.length > 1) this.postInfo = result.result[1];
        // Get the URL or other parameter from the route
        this.backgroundService.updatePostDetailHeaderInfo(result);
        
      }, (error) => {
        console.error(error);
      });
    });

    this.backgroundService.arrowDirection$.subscribe((direction: string) => {
      this.subscribeToArrowDirection();  
    });
  }

  // Subscribe to arrowDirection$ when needed
  subscribeToArrowDirection(): void {
    if (!this.arrowDirectionSubscription) {
      this.arrowDirectionSubscription = this.backgroundService.arrowDirection$.subscribe((direction: string) => {
        if (direction !== "") {
          this.updatePost(direction);
        }
      });
    }
  }

  // Unsubscribe from arrowDirection$ when no longer needed
  unsubscribeFromArrowDirection(): void {
    if (this.arrowDirectionSubscription) {
      this.arrowDirectionSubscription.unsubscribe();
      this.arrowDirectionSubscription = null;
    }
  }



  // Cleanup on component destroy
  ngOnDestroy(): void {
    this.unsubscribeFromArrowDirection();
  }
}
