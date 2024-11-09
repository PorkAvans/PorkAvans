import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';

const routes: Routes = [
  { path: 'add-afiliado', component: AddAfiliadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAfiliadoRoutingModule { }
