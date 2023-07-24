import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  user!: any;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
  logout() {
    localStorage.clear();
    this._Router.navigate(['auth/login']);
  }
}
