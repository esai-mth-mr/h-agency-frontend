import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
import { IndustryCarouselComponent } from '../industry-carousel/industry-carousel.component';

@Component({
  selector: 'app-service',
  
  imports: [CommonModule, FaqAccordionComponent, IndustryCarouselComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
