import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyProductComponent} from './buy-product/buy-product.component';
import {PayForProductComponent} from './pay-for-product/pay-for-product.component'

const routes: Routes = [
  { path: 'product/:product_id/:associate_id', component: BuyProductComponent },
  { path: 'product/:product_id/:associate_id', component: PayForProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionVentasRoutingModule { }
