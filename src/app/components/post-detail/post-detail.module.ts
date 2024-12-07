import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';
import { BackgroundService } from '../../shared/background.service';

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostDetailRoutingModule
  ]
})
export class PostDetailModule {

  postHeaderImgUrl: string = '/assets/images/blog/post1.png';
  constructor(
    private route: ActivatedRoute,
    private backgroundService: BackgroundService
  ) {}

 
 }
