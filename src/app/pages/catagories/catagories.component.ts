import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.scss'],
})
export class CatagoriesComponent {
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  catagories!: ProductsService[];
  selectedCatagory!:string;
  catagoryProducts!:ProductsService[];
  constructor(private _ProductsService: ProductsService) {}
  ngOnInit() {
    this._ProductsService.getAllCatagories().subscribe((res: any) => {
      this.catagories = res;
    });
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];


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
  storeValue(event:any) {
    this.selectedCatagory = event.originalEvent.srcElement.innerText;
    this._ProductsService.getCatagoryProducts(this.selectedCatagory).subscribe((res)=>{
      this.catagoryProducts=res.products;
    })
}

}
