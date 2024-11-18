import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionVentasRoutingModule } from './gestion-ventas-routing.module';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { PayForProductComponent } from './pay-for-product/pay-for-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  // Agregado
import { MatInputModule } from '@angular/material/input';          // Agregado
import { MatButtonModule } from '@angular/material/button';       // Agregado


@NgModule({
  declarations: [
    BuyProductComponent,
    PayForProductComponent
  ],
  imports: [
    CommonModule,
    GestionVentasRoutingModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,   // Agregado
    MatInputModule,       // Agregado
    MatButtonModule       // Agregado
  ]
})
export class GestionVentasModule { }
