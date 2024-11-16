import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';


const routes: Routes = [
  { path: 'add-product-sale', component: AddProductSaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionColeccionRoutingModule { }
