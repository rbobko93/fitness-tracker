import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',
        {
          validators: [Validators.email,
            Validators.required]
        }),
      password: new FormControl('', {validators: Validators.required})
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}
