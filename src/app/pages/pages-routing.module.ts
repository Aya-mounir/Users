import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UsersComponent } from './users/users.component';
import { CatagoriesComponent } from './catagories/catagories.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'product/:id',
    component: SingleProductComponent,
  },
  { path: 'users', component: UsersComponent },
  { path: 'catagories', component: CatagoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
