import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { NgxToastService } from '@angular-magic/ngx-toast';
@Component({
  selector: 'app-contactus',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ngxToastService: NgxToastService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required],
      phone: [''],
    });
  }

  showSuccess(message: string) {
    this.ngxToastService.success({
      title: 'Success',
      delay: 3000,
      messages: [`${message}`],
    });
    this;
  }

  showError(message: string) {
    this.ngxToastService.error({
      title: 'Warning',
      delay: 3000,
      messages: [`${message}`],
    });
  }

  onSubmit() {
    try {
      const controls = this.contactForm.controls;
      console.log(controls);
      let isValid = true;

      if (controls['name'].invalid && controls['name'].errors?.['required']) {
        this.showError('Name Required.');
        isValid = false;
      }

      if (controls['email'].invalid) {
        if (controls['email'].errors?.['required']) {
          this.showError('Email Address Required.');
        } else if (controls['email'].errors?.['email']) {
          this.showError('Invalid Email Address.');
        }
        isValid = false;
      }

      if (
        controls['content'].invalid &&
        controls['content'].errors?.['required']
      ) {
        this.showError('Message Required.');
      }
      if (!isValid) {
      }
      console.log(this.contactForm.value);
      if (this.contactForm.valid) {
        console.log('contactform valid');
        this.http.post('/api/contact', this.contactForm.value).subscribe(
          (response) => {
            this.showSuccess('Message sent successfully');
            console.log('Email sent successfully', response);
            this.contactForm.reset();
          },
          (error) => {
            this.showError("You've got an error during sending messages.");
            console.error('Error sending email', error);
          }
        );
      }
    } catch (error) {
      console.log(error);
      this.showError('An error o');
    }
  }
}
