import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionColeccionRoutingModule } from './gestion-coleccion-routing.module';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';


@NgModule({
  declarations: [
    AddProductSaleComponent
  ],
  imports: [
    CommonModule,
    GestionColeccionRoutingModule,
    FormsModule
  ]
})
export class GestionColeccionModule { }
