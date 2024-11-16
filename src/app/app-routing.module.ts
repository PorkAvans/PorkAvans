import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecoleccionComponent } from './recoleccion/recoleccion.component';
import { CollectionDashboardComponent } from './collection/collection-dashboard/collection-dashboard.component';
import { ComidaSuministradaComponent } from './comida-suministrada/comida-suministrada.component';
import { StockComponent } from './stock-products/stock-products.component';
import { AddAfiliadoComponent } from './gestion_afiliado/add-afiliado/add-afiliado.component';

// Aquí está la modificación para la ruta de gestion-distribuidores
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recoleccion', component: RecoleccionComponent },
  { path: 'collection-dashboard', component: CollectionDashboardComponent },
  { path: 'comida-suministrada', component: ComidaSuministradaComponent },
  { path: 'stock-products', component: StockComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'add-afiliado', component: AddAfiliadoComponent },
  
  
  // Modificación aquí
  { path: 'gestion-distribuidores', loadChildren: () => import('./gestion-distribuidores/gestion-distribuidores.module').then(m => m.GestionDistribuidoresModule) },
  { path: 'gestion_usuarios', loadChildren: () => import('./gestion_usuarios/gestion-usuarios.module').then(m => m.GestionUsuariosModule) },
  { path: 'gestion_afiliado', loadChildren: () => import('./gestion_afiliado/gestion-afiliado.module').then(m => m.GestionAfiliadoModule) },
  { path: 'gestion-ventas', loadChildren: () => import('./gestion-ventas/gestion-ventas.module').then(m => m.GestionVentasModule) },
  { path: 'gestion-coleccion', loadChildren: () => import('./gestion-coleccion/gestion-coleccion.module').then(m => m.GestionColeccionModule) 
  },
  
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
