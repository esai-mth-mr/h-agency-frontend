import {ChangeDetectionStrategy, Component, ɵɵInputTransformsFeature, signal} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';   

@Component({
  selector: 'app-landing',
  imports: [MatExpansionModule], 
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,  

})
export class LandingComponent {
  readonly panelOpenState = signal(false);

}
