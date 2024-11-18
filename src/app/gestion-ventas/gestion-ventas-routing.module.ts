import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyProductComponent} from './buy-product/buy-product.component';
import { ViewPresaleComponent } from './view-presale/view-presale.component'; 
import {PayForProductComponent} from './pay-for-product/pay-for-product.component'

const routes: Routes = [
  { path: 'product/:product_id/:associate_id', component: BuyProductComponent },
  { path: 'view-presale', component: ViewPresaleComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionVentasRoutingModule { }
