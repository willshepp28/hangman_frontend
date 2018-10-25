import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }


  // convenience getter for easy access to form fields
  get getFormControls() { return this.signupForm.controls; }


  onSubmit(){

    this.submitted = true;

     // stop here if form is invalid
     if (this.signupForm.invalid) {
      return;
    }

    console.log(this.signupForm.value);

    this.authService.register(this.signupForm.value)
      .subscribe(
        data => { this.router.navigate(["/login"]);
      },
      error => { console.log(error);
      });
  }

}
