import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { PagesLayoutComponent } from './layouts/pages-layout/pages-layout.component';
import { NavBarComponent } from '../global/nav-bar/nav-bar.component';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from '../global/footer/footer.component';
@NgModule({
  declarations: [AuthLayoutComponent, PagesLayoutComponent, NavBarComponent,FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
    OverlayPanelModule,
    ButtonModule,
  ],
})
export class SharedModule {}
