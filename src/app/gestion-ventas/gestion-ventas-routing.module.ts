import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyProductComponent} from './buy-product/buy-product.component';
import { ViewPresaleComponent } from './view-presale/view-presale.component'; 
import { ViewImageComponent } from './view-image/view-image.component';
import { UpdatePresaleComponent } from './update-presale/update-presale.component';
import { ViewSaleComponent} from './view-sale/view-sale.component';

const routes: Routes = [
  { path: 'product/:product_id/:associate_id', component: BuyProductComponent },
  { path: 'view-presale', component: ViewPresaleComponent },
  { path: 'view.image',component: ViewImageComponent },
  { path: 'update-presale', component: UpdatePresaleComponent },
  { path: 'view-sale', component: ViewSaleComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionVentasRoutingModule { }
