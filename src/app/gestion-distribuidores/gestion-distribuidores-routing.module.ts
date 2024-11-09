import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDistribuidorComponent } from './view-distribuidor/view-distribuidor.component';
import { AddDistribuidorComponent } from './add-distribuidor/add-distribuidor.component';
import { EditDistribuidorComponent } from './edit-distribuidor/edit-distribuidor.component';

const routes: Routes = [
  { path: 'view-administrador', component: ViewDistribuidorComponent },
  { path: 'add-distribuidor', component: AddDistribuidorComponent },
  { path: 'edit-distribuidor', component: EditDistribuidorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDistribuidoresRoutingModule { }
