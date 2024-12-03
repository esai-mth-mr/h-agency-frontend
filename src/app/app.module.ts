import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LandingComponent } from './components/landing/landing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module'; // Import your Material module 

@NgModule({
  declarations: [
    //HeaderHeroContentComponent,
    AppComponent,
    //BlogComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,  
    LandingComponent,
    MaterialModule 
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppModule { 

}
