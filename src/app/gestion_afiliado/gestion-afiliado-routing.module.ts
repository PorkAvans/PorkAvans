import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { ProductSaleDescriptionComponent } from './product-sale-description/product-sale-description.component';

const routes: Routes = [
  { path: 'add-afiliado', component: AddAfiliadoComponent },
  { path: 'add-product-sale', component: AddProductSaleComponent },
  { path: 'product-sale-description/:id', component: ProductSaleDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAfiliadoRoutingModule { }
