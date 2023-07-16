import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataViewModule } from 'primeng/dataview';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SingleProductComponent } from './single-product/single-product.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [HomeComponent, SingleProductComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    DataViewModule,
    FormsModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CardModule,
    DropdownModule
  ],
})
export class PagesModule {}
