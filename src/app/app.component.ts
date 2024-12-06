import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
//Angular Material
import {MatExpansionModule} from '@angular/material/expansion';
import {ChangeDetectionStrategy, signal} from '@angular/core';
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  //declarations: [MatExpansionModule]
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  currentUrl: string = "/";
  isBlogPage: boolean = false;
  isLandingPage: boolean = false;
  isPostDetailPage: boolean = false;
  constructor(private http: HttpClient, private router: Router, activatedRoute:ActivatedRoute) {}
  ngOnInit() {
   // this.getForecasts();
   this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
        console.log(this.currentUrl);
        this.updateContentBasedOnUrl();
         // This should now log the correct URL
      });
  }
  // getForecasts() {
  //   this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //     (result) => {
  //       this.forecasts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
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
    console.log(item)
    this.currentImgUrl = this.headerImgUrl[item];
  };

  updateContentBasedOnUrl(): void {
    //header content
    if(this.currentUrl.includes('blog')) {
            
      if(this.currentUrl.includes('post')) {
      
        this.changeBackground('post'); 
      } else {
             this.changeBackground("blog");
      }
    }
    if(this.currentUrl.includes('landing')) { 
      this.changeBackground('landing');
    }
    this.isBlogPage = this.currentUrl.includes('blog');
    if(this.currentUrl.includes('post')) {
      this.isBlogPage = false;
    }
    this.isLandingPage = this.currentUrl.includes('landing');
    this.isPostDetailPage = this.currentUrl.includes('post');

  }
  

}
