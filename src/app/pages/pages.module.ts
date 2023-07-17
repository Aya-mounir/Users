import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataViewModule } from 'primeng/dataview';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SingleProductComponent } from './single-product/single-product.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { UsersComponent } from './users/users.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [HomeComponent, SingleProductComponent, UsersComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DataViewModule,
    FormsModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    TableModule,
    MultiSelectModule,
  ],
})
export class PagesModule {}
