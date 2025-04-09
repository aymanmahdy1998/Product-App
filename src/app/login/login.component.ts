import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,RouterLink],
})
export class LoginComponent {
  submitted = false;

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log("Login successful!", form.value);
    } else {
      console.log("Form is invalid!");
    }
  }
}
