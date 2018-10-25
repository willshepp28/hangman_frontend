import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '../core/authentication/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
        username: ["", [Validators.required, Validators.minLength(4)]],
        password: ["", [Validators.required, Validators.minLength(5)]]
     });
  }



   // convenience getter for easy access to form fields
   get getFormControls() { return this.loginForm.controls; }


   onSubmit(){
     this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
       return;
     }
     console.log(this.loginForm.value);
     this.authService.login(this.loginForm.value)
       .subscribe(
         data => { this.router.navigate(["/home"]);
       },
       error => { console.log(error);
       });
   }

}
