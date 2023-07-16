import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, PagesLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
