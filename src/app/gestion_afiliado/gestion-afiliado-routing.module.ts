import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAfiliadoComponent } from './add-afiliado/add-afiliado.component';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { ProductSaleDescriptionComponent } from './product-sale-description/product-sale-description.component';
import { ViewProductsSaleComponent } from './view-products-sale/view-products-sale.component'; 

const routes: Routes = [
  { path: 'add-afiliado', component: AddAfiliadoComponent },
  { path: 'add-product-sale', component: AddProductSaleComponent },
  { path: 'product-sale-description/:id', component: ProductSaleDescriptionComponent },
  { path: 'view-products-sale', component: ViewProductsSaleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAfiliadoRoutingModule { }
