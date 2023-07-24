import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public _AuthService: AuthService,
    public _FB: FormBuilder,
    private _Router: Router
  ) {}
  loginForm!: FormGroup;
  isAuthenticated = false;
  ngOnInit() {
    this.loginForm = this._FB.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  submitLoginForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this._AuthService.login(this.loginForm.value).subscribe((res) => {
        this._Router.navigate(['pages/home']);
        this._AuthService.getUserData(res);
      });
    }
  }
}
