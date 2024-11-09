import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Asegúrate de importar ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { GestionAfiliadoRoutingModule } from './gestion-afiliado-routing.module'; // Asegúrate de que este módulo está bien configurado
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';

@NgModule({
  declarations: [
    AddAfiliadoComponent // Tu componente debe estar aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Asegúrate de que ReactiveFormsModule está en imports
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    GestionAfiliadoRoutingModule // Aquí se deben declarar las rutas si las tienes configuradas
  ]
})
export class GestionAfiliadoModule { }
