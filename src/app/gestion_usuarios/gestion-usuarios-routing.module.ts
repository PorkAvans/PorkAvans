import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';  // Asegúrate de que la ruta es correcta

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'view-user', component: ViewUserComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsuariosRoutingModule { }
