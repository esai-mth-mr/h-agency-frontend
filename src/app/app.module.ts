import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { LandingComponent } from './components/landing/landing.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module'; // Import your Material module 
import { HeaderComponent } from './components/header/header.component';
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
    MaterialModule,
    //CommonModule
    BlogComponent,
    HeaderComponent
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppModule { 

}
