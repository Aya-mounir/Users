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
  constructor(private _ProductsService: ProductsService) {}
  ngOnInit() {
    this._ProductsService.getAllProducts().subscribe((res: any) => {
      this.products = res.products;
      this.sortOptions = [
        { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
    ];
    });

  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
