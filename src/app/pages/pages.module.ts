import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataViewModule } from 'primeng/dataview';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    DataViewModule,
    FormsModule,
  ],
})
export class PagesModule {}
