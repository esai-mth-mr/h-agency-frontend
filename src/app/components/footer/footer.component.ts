import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
 // standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [CommonModule, RouterModule]
})
export class FooterComponent {
  constructor(private router: Router) {
    };
}

