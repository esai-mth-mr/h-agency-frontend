import { Component } from '@angular/core';
import { IndustryCarouselComponent } from '../industry-carousel/industry-carousel.component';
import { CommonModule } from '@angular/common';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [IndustryCarouselComponent, FaqAccordionComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
