import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { OTPComponent } from './otp/otp.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    OTPComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule {}
