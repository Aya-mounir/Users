import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}

  login(data: any) {
    return this._HttpClient.post('https://dummyjson.com/auth/login', data);
  }
}
