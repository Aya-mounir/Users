import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    DropdownModule,
    OverlayPanelModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[NavBarComponent]
})
export class GlobalModule { }
