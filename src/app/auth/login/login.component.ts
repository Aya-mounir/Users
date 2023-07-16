import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

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
  ngOnInit() {
    this.loginForm = this._FB.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  submitLoginForm() {
    if(this.loginForm.valid){
      console.log("rrrrrrrrrrrr")
      this._AuthService.login(this.loginForm.value).subscribe((res) => {
        //console.log("aaaaaaa",res.message);
          this._Router.navigate(['pages/home']);
      });
    }
  }
}
