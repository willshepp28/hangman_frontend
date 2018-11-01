import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '../core/authentication/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacebookService } from '../core/services/social/facebook/facebook.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private fbService: FacebookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // only run if the token is in the query string
   if(this.route.snapshot.queryParamMap.has("token")) {
     localStorage.setItem("token", this.route.snapshot.queryParamMap.get("token"));
     this.router.navigate(["/home"]);
   }

    // removes the "#_=_ facebook adds to url when redirecting"
    if (window.location.hash && window.location.hash === '#_=_') {
      window.location.hash = '';
  }


    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });

    console.log(window.location.hash);
  }



  // convenience getter for easy access to form fields
  get getFormControls() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(
        response => {
          // set token, then redirect user to home page
          localStorage.setItem("token", response.token);
          this.router.navigate(["/home"]);
        },
        error => {
          console.log(error);
        });
  }


}
