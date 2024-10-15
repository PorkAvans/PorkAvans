import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecoleccionComponent } from './recoleccion/recoleccion.component';
import { CollectionDashboardComponent } from './collection/collection-dashboard/collection-dashboard.component'; // Importa el nuevo componente
import { ComidaSuministradaComponent } from './comida-suministrada/comida-suministrada.component'; // Importa el componente Comida Suministrada
import { StockComponent } from './stock-products/stock-products.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recoleccion', component: RecoleccionComponent },
  { path: 'collection-dashboard', component: CollectionDashboardComponent },
  { path: 'comida-suministrada', component: ComidaSuministradaComponent },
  {path:  'stock-products', component: StockComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'gestion_usuarios', loadChildren: () => import('./gestion_usuarios/gestion-usuarios.module').then(m => m.GestionUsuariosModule) },
  { path: '**', redirectTo: '/login' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
