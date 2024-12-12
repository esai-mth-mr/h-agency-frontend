import {ChangeDetectionStrategy, Component, ɵɵInputTransformsFeature, signal} from '@angular/core';

import { MaterialModule } from '../../material.module';
@Component({
  selector: 'app-faq-accordion',
  imports: [MaterialModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.css'
})
export class FaqAccordionComponent {
  readonly panelOpenState = signal(false);

}
