import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClient} from '@angular/common/http';
import { SnackbarService } from '../../snackbar.service';
@Component({
  selector: 'app-contactus',
  imports: [FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private snackbarService: SnackbarService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required],
      phone: ['']
    });
  }

  onSubmit() {
    const controls = this.contactForm.controls;
    console.log(controls);
    let isValid = true;

    const errorMessages:string[] = [];
    if (controls['name'].invalid && controls['name'].errors?.["required"]) {  
      errorMessages.push('Your Name is required.');
      //this.snackbarService.openSnackBar('Your Name is required.'); 
      isValid = false;  
    }  

    if (controls['email'].invalid) {  
      if (controls['email'].errors?.['required']) {  
          //this.openSnackBar('Email Address is required.', 'Close');  
          errorMessages.push('Email Address is required.'); 

      } else if (controls['email'].errors?.['email']) { 
        this.snackbarService.openSnackBar("ererererer");   
          //this.openSnackBar('Email Address is not valid.', 'Close');  
          errorMessages.push('Email Address is not valid.');  
      }  
      isValid = false;  
  } 

    if (controls['content'].invalid && controls['content'].errors?.["required"]) {  
      //this.openSnackBar('Leave a comment is required.', 'Close');
      this.snackbarService.openSnackBar("Dfdfddfdf");  
      errorMessages.push('Leave a comment is required.');  
      isValid = false;  
    }
    if (!isValid) {
      let delay = 0; // Initial delay  

      errorMessages.forEach((message, index) => {  
     //     setTimeout(() => {  
              this.snackbarService.openSnackBar(message);  
          //}, delay);  

 //         delay += 100000; // Increment the delay by 3 seconds for each message  
      });  
      return; // Stop the submission if any required field is invalid  
  }  


    console.log(this.contactForm.value);
    if(this.contactForm.valid) {
      console.log("contactform valid");
      this.http.post('/api/contact', this.contactForm.value).subscribe(
        response => {
          console.log('Email sent successfully', response);
          this.contactForm.reset();
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    }
  }
}

