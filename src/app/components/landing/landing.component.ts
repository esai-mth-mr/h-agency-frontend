import {ChangeDetectionStrategy, Component, ɵɵInputTransformsFeature, signal} from '@angular/core';
import { IndustryCarouselComponent } from '../industry-carousel/industry-carousel.component';
import { FaqAccordionComponent } from '../faq-accordion/faq-accordion.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IndustryCarouselComponent, FaqAccordionComponent],  

})
export class LandingComponent {

}
