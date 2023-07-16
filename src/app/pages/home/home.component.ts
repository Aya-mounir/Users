import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allProducts: any[] = [];
  constructor(private _ProductsService: ProductsService) {}
  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe((res: any) => {
      this.allProducts = res.products;
    });
  }
}
