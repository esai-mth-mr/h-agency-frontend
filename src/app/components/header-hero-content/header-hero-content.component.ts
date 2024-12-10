import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-header-hero-content',
 // standalone: false,
  
  templateUrl: './header-hero-content.component.html',
  styleUrl: './header-hero-content.component.css',
  imports:  [MatButtonModule, MatIconModule, CommonModule]
})
export class HeaderHeroContentComponent {

}
