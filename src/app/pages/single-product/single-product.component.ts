import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
ActivatedRoute
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  id!:string;
  singleProduct!:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){
  }
  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.params['id'];
    this.singleProduct=this._ProductsService.getOneProduct(this.id).subscribe((res: any) => {
      this.singleProduct = res;
  });
  }

}
