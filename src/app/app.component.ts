import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  //declarations: [MatExpansionModule]
})
export class AppComponent {

  constructor(private router:Router){};
  navigateToUrl(url:string):void {
    this.router.navigate([url]);
  }
   
}
