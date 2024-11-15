import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { GestionAfiliadoRoutingModule } from './gestion-afiliado-routing.module';
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { ProductSaleDescriptionComponent } from './product-sale-description/product-sale-description.component';
import { ViewProductsSaleComponent } from './view-products-sale/view-products-sale.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddAfiliadoComponent,
    AddProductSaleComponent,
    ProductSaleDescriptionComponent,
    ViewProductsSaleComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule, // Asegúrate de importar MatTableModule aquí
    MatPaginatorModule, // Asegúrate de importar MatPaginatorModule aquí
    MatSortModule, // Asegúrate de importar MatSortModule aquí
    SharedModule,
    GestionAfiliadoRoutingModule 
  ]
})
export class GestionAfiliadoModule { }
