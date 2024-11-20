import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionVentasRoutingModule } from './gestion-ventas-routing.module';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { PayForProductComponent } from './pay-for-product/pay-for-product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';  // Agregado
import { MatInputModule } from '@angular/material/input';          // Agregado
import { MatButtonModule } from '@angular/material/button';
import { ViewPresaleComponent } from './view-presale/view-presale.component';       // Agregado
import { SharedModule } from '../../shared/shared.module';
import { ViewImageComponent } from './view-image/view-image.component';
import { UpdatePresaleComponent } from './update-presale/update-presale.component';
import { ViewSaleComponent } from './view-sale/view-sale.component';
import { MatPaginatorModule } from '@angular/material/paginator';

// Importa MatTableModule
import { MatTableModule } from '@angular/material/table';  // Asegúrate de importar MatTableModule

@NgModule({
  declarations: [
    BuyProductComponent,
    PayForProductComponent,
    ViewPresaleComponent,
    ViewImageComponent,
    UpdatePresaleComponent,
    PayForProductComponent,
    ViewSaleComponent
  ],
  imports: [
    CommonModule,
    GestionVentasRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,   // Agregado
    MatInputModule,       // Agregado
    SharedModule,
    MatButtonModule,      // Agregado
    MatTableModule        // Asegúrate de agregar MatTableModule aquí
  ]
})
export class GestionVentasModule { }
