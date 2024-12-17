import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {  
    this.snackBar.openFromComponent(CustomSnackbarComponent, {  
      data: { message },  
      duration: 100000, // Duration can still be added here if needed  
      horizontalPosition: 'center',  
      verticalPosition: 'top',  
      panelClass: ['custom-snackbar-panel'] // Add a class if needed for styling  
    });  
  } 
}
