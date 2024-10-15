import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { MatFormFieldModule } from '@angular/material/form-field';  // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input';  // Importa MatInputModule
import { MatSelectModule } from '@angular/material/select';  // Importa MatSelectModule
import { MatButtonModule } from '@angular/material/button';  // Importa MatButtonModule

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';  // Asegúrate de importar tu componente

@NgModule({
  declarations: [
    EditUserComponent  // Declara tu componente aquí
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Agrega ReactiveFormsModule aquí
    MatFormFieldModule,  // Agrega MatFormFieldModule aquí
    MatInputModule,  // Agrega MatInputModule aquí
    MatSelectModule,  // Agrega MatSelectModule aquí
    MatButtonModule,  // Agrega MatButtonModule aquí
    GestionUsuariosRoutingModule
  ]
})
export class GestionUsuariosModule { }
