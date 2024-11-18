import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionColeccionRoutingModule } from './gestion-coleccion-routing.module';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { AddCommissionComponent } from './add-commission/add-commission.component';


@NgModule({
  declarations: [
    AddProductSaleComponent,
    AddCommissionComponent
  ],
  imports: [
    CommonModule,
    GestionColeccionRoutingModule,
    FormsModule
  ]
})
export class GestionColeccionModule { }
