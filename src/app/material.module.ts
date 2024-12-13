// src/app/material.module.ts  
import { NgModule } from '@angular/core';  
import { MatButtonModule } from '@angular/material/button'; // Example of a material module  
import { MatInputModule } from '@angular/material/input'; // Example of another material module  
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
@NgModule({  
  exports: [  
    MatButtonModule,  
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
    // Add other Angular Material modules as needed   
  ],
})
export class MaterialModule {}  