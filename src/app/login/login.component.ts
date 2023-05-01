import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
/**
 * Modify the login component and the login template to collect login details and add the validators as necessary
 */
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  hide = true;
  loginSuccess = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // setup the loginform and validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms: ['', [Validators.required]]
    });
  }

  ngOnDestroy() {}

  onSubmit() {
    this.submitted = true;
    // console.log(this.loginForm.get('email').value)
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(response => {
      if (response) {
        this.loginSuccess = true;
        console.log("response:", response)
        this.authenticationService.showNotifier('Login Successful', 'success');
        //receiving only the token form this API and not the user details
        this.router.navigate(['welcome/:' + response.token]);
      } else {
        this.loginSuccess = false;
        this.submitted = false;
        this.authenticationService.showNotifier('Login Failed', 'error');
      }
    });
  }

  //Not using these as these are not required for the given requirements
  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator() {
    return false;
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator() {
    return false;
  }
}
