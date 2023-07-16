import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  products!: ProductsService[];
  allProducts: any[] = [];
  constructor(private _ProductsService: ProductsService) {}
  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe((res: any) => {
      this.allProducts = res.products;
    });
  }
}
