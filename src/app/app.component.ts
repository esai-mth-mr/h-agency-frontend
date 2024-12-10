import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import { BackgroundService } from './shared/background.service';
interface HeaderInfo {
  status: string;
  result: Array<{status: string, id: number, title: string, content: string, category: string, user_id: string, created_at: Date, updated_at: Date, primary_img_url: string, secondary_img_url: string}>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  //declarations: [MatExpansionModule]
})
export class AppComponent implements OnInit {
  
  headerBackgroundStyle: { [key: string]: string } = {};

  headerInfo: any;
  currentUrl: string = "/";
  isBlogPage: boolean = false;
  isLandingPage: boolean = false;
  isPostDetailPage: boolean = false;
  isPrevBtn: boolean = false;
  isNextBtn: boolean = false;

  
  arrowPost(direction: string) {
    this.backgroundService.updateArrowDirection(direction);
  };

  constructor(
    private http: HttpClient, 
    private router: Router, 
    activatedRoute:ActivatedRoute, 
    private backgroundService:BackgroundService ) {}
  ngOnInit() {    
   //this.getForecasts();
  // Subscribe to the background URL changes
   // Subscribe to the background URL changes
   this.backgroundService.postDetailHeaderInfo$.subscribe((HeaderInfo:HeaderInfo) => {
     this.headerInfo = HeaderInfo;
     this.isPrevBtn = HeaderInfo.status == "previous" ? false : true;
     this.isNextBtn = HeaderInfo.status == "next" ? false : true;
    if(HeaderInfo.status == "previous" && HeaderInfo.result?.length > 0)
      {
        this.headerInfo = HeaderInfo.result[0];
      }
    else if(HeaderInfo?.result?.length > 1) this.headerInfo = HeaderInfo.result[1];
    this.currentImgUrl = this.headerInfo?.primary_img_url || "";
  });

  
   this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
        this.updateContentBasedOnUrl();
         // This should now log the correct URL
      });
  }
  
  title = 'demo.client';
  //header background should be changed based on the page.
  headerImgUrl: {[key:string]: string} = {
    landing: "/assets/images/header/landing.png",
    blog: "/assets/images/header/blog.png",
    resource: "/assets/images/header/resource.png",
    service: "/assets/images/header/service.png",
    pricing: "/assets/images/header/pricing",
  };
  currentImgUrl: string = this.headerImgUrl['landing'];
  changeBackground(item: string): void {
    this.currentImgUrl = this.headerImgUrl[item];
  };

  updateContentBasedOnUrl(): void {  
    // Reset all flags to false  
    this.isPostDetailPage = false;  
    this.isBlogPage = false;  
    this.isLandingPage = false;  

    // Check for 'blog' in the URL  
    if (this.currentUrl.includes('blog')) {  
        const hasPostId = !!this.currentUrl.split('/')[2]; // Check if there's a post ID  

        if (hasPostId) {  
            this.changeBackground('post');   
            this.isPostDetailPage = true;  
        } else {  
            this.changeBackground("blog");  
            this.isBlogPage = true;  
        }
    }   
    // Check for 'landing' in the URL  
    else if (this.currentUrl.includes('landing')) {   
        this.changeBackground('landing');  
        this.isLandingPage = true;  
    }  
    if(this.currentUrl.includes('contactus')) {
      this.isLandingPage = false; 
      this.isBlogPage = false;
      this.isPostDetailPage = false;
    }
}  
}
