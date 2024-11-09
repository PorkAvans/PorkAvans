import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})



export class SideBarComponent {

  isTrendsSubmenuOpen = false;
  isUsersSubmenuOpen = false;
  isCollapsed = false;  
  userRole: string = '';  // Agregar propiedad para el rol

  constructor(private router: Router) { 
    this.getUserRole();  // Obtener el rol del usuario al iniciar el componente
  }

  getUserRole() {
    const role = localStorage.getItem('user_rol');  // Suponiendo que el rol está guardado en el localStorage
    this.userRole = role ? role : '';  // Si no hay rol, asignar un valor por defecto
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;  // Alterna el estado colapsado
  }

  toggleTrendsSubmenu() {
    this.isTrendsSubmenuOpen = !this.isTrendsSubmenuOpen;
  }

  toggleUserSubmenu() {
    this.isUsersSubmenuOpen = !this.isUsersSubmenuOpen;
  }

  

  navigateToComidaSuministrada() {

    this.router.navigate(['/comida-suministrada'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /dashboard exitosa.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }

  navigateToStockproductos() {

    this.router.navigate(['/stock-products'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /stock-products.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }

  navigateToViewAdministrador() {
    this.router.navigate(['/gestion-distribuidores/view-administrador'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /view-administrador.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }
  

  navigateToViewuser() {
    this.router.navigate(['/gestion_usuarios/view-user'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /vista de usuarios exitosa.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }

  navigateToDashboard() {

    this.router.navigate(['/dashboard'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /dashboard exitosa.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }

  navigateTorecoleccion() {
    this.router.navigate(['/recoleccion'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /dashboard exitosa.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }

  navigateTocollection() {
    this.router.navigate(['/collection-dashboard'])
      .then(() => {
        // Puedes agregar alguna acción aquí si es necesario
        console.log('Navegación a /dashboard exitosa.');
        this.isTrendsSubmenuOpen = false;  // Cierra el submenú
      })
      .catch(error => {
        // Manejo de errores si la navegación falla
        console.error('Error durante la navegación:', error);
      });
  }
}
