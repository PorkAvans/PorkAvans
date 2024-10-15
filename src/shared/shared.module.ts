import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [
    SideBarComponent // Exporta el componente si se va a utilizar fuera de este módulo
  ]
})
export class SharedModule { }
