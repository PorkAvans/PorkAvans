import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { GestionAfiliadoRoutingModule } from './gestion-afiliado-routing.module'; // Asegúrate de que este módulo está bien configurado
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductSaleDescriptionComponent } from './product-sale-description/product-sale-description.component';

@NgModule({
  declarations: [
    AddAfiliadoComponent,
    AddProductSaleComponent,
    ProductSaleDescriptionComponent // Tu componente debe estar aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Asegúrate de que ReactiveFormsModule está en imports
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    SharedModule,
    GestionAfiliadoRoutingModule // Aquí se deben declarar las rutas si las tienes configuradas
  ]
})
export class GestionAfiliadoModule { }
