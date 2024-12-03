import {ChangeDetectionStrategy, Component, ɵɵInputTransformsFeature, signal} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion'; // Import the module here  

@Component({
  selector: 'app-landing',
  imports: [MatExpansionModule], // Include MatExpansionModule here  
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,  

})
export class LandingComponent {
  readonly panelOpenState = signal(false);

}
