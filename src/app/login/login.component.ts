import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Define la interfaz que describe la estructura de la respuesta del servidor
interface AuthResponse {
  access_token: string;
  token_type: string;
  user_estado: string;
  user_rol: string; // Asegúrate de que la respuesta incluya este campo
  user_id: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: AuthResponse) => {
        // Almacenar el token, el estado y el rol en el localStorage
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user_estado', response.user_estado);
        localStorage.setItem('user_rol', response.user_rol); // Guardar el rol
        localStorage.setItem('user_id', response.user_id); // Guardar el rol


        if (response.user_estado === 'ACTIVO' && response.user_rol === 'AFILIADO') {
          // Si el usuario está activo y su rol es "AFILIADO", redirigir al componente add-product-sale
          this.router.navigateByUrl("/gestion_afiliado/add-product-sale").then();
        } else if (response.user_estado === 'ACTIVO') {
          // Si el usuario está activo pero no tiene rol "AFILIADO", redirigir a /dashboard
          this.router.navigateByUrl("/dashboard").then();
        } else {
          // Si el usuario no está activo
          this.showAlert('El usuario no se encuentra ACTIVO');
        }
        
      },
      error: (error) => {
        this.showAlert('Error de autenticación: ' + (error.error.detail || 'Credenciales incorrectas'));
      },
      complete: () => {
        console.log('Proceso de autenticación completo');
      }
    });
  }

  showAlert(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  navigateToRegister() {
    this.router.navigateByUrl("/add-afiliado");
  }
}
