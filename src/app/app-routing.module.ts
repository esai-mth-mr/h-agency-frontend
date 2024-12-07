import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
const routes: Routes = [
  { path: 'blog', component: BlogComponent 
  },
  { path: 'landing', component: LandingComponent 
  },  
  {path: 'blog/post/:id', component: PostDetailComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
