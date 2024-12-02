import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  { path: 'blog', component: BlogComponent 
  },
  { path: 'landing', component: LandingComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
