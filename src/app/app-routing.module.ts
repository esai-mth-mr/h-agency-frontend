import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import {ContactusComponent} from "./components/contactus/contactus.component";
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServiceComponent } from './components/service/service.component';
const routes: Routes = [
   { path: 'blog/create', component: PostCreateComponent }, // More specific route first
   { path: 'blog/:id', component: PostDetailComponent },    // Dynamic route second
  { path: 'blog', component: BlogComponent },             // General route last
  { path: '', component: LandingComponent },
  {path: 'contactus', component: ContactusComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'service', component: ServiceComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
