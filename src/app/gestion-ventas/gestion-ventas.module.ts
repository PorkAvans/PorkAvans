import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionVentasRoutingModule } from './gestion-ventas-routing.module';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { PayForProductComponent } from './pay-for-product/pay-for-product.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BuyProductComponent,
    PayForProductComponent
  ],
  imports: [
    CommonModule,
    GestionVentasRoutingModule,
    MatDialogModule,
  ]
})
export class GestionVentasModule { }
