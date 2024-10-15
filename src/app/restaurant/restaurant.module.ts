import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantRoutingModule } from './restaurant-routing.module';



@NgModule({
  declarations: [
    RestaurantCreateComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    RestaurantEditComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
