import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionVentasRoutingModule } from './gestion-ventas-routing.module';
import { BuyProductComponent } from './buy-product/buy-product.component';


@NgModule({
  declarations: [
    BuyProductComponent
  ],
  imports: [
    CommonModule,
    GestionVentasRoutingModule
  ]
})
export class GestionVentasModule { }
