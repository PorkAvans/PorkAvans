import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyProductComponent} from './buy-product/buy-product.component';

const routes: Routes = [
  { path: 'product/:product_id/:associate_id', component: BuyProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionVentasRoutingModule { }
