import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup,FormBuilder,ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact-us',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    MatCardModule,
  MatButtonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService,  private snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(5)]],
      phoneNumber: ['',Validators.required],
      address: this.fb.group({
        city: [''],
        state: ['']
    })});
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Access the first name value from the form
      console.log('Name:', this.myForm.value.name);
      console.log('Phone:', this.myForm.value.phoneNumber);
      console.log('City:', this.myForm.value.address.city);
      console.log('State:', this.myForm.value.address.state);

      const formData = {
        ...this.myForm.value, // Copy all form values
        city: this.myForm.value.address.city, // Move city to the root
        state: this.myForm.value.address.state, // Move state to the root
      };

      this.apiService.postContactForm(formData).subscribe({
        next: response => {
          console.log('Form submitted successfully', response);
          this.snackBar.open('Form submitted successfully!', 'Close', {
            duration: 3000, // Display for 3 seconds
          });
          this.myForm.reset(); // Reset the form after submission
        },
        error: error => {
          console.error('Error submitting form', error);
          this.snackBar.open('Failed to submit form. Please try again.', 'Close', {
            duration: 3000,
          });
        }
      });
    } else {
      console.log('Form is invalid');
    }
    this.myForm.reset();
  }

  update(){
    this.myForm.patchValue({
      name: 'John Doe',
      phoneNumber: '1234567890',
      address: {
        city: 'New York',
        state: 'NY'
    }});
  }
}
