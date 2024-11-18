import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductSaleComponent } from './add-product-sale/add-product-sale.component';
import { AddCommissionComponent} from './add-commission/add-commission.component'


const routes: Routes = [
  { path: 'add-product-sale', component: AddProductSaleComponent },
  { path: 'add-commission', component: AddCommissionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionColeccionRoutingModule { }
