import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Define la interfaz que describe la estructura de la respuesta del servidor
interface AuthResponse {
  access_token: string;
  token_type: string;
  user_estado: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  // rememberMe: boolean = false;

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response: AuthResponse) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('user_estado', response.user_estado);

        if (response.user_estado === 'ACTIVO') {
          this.router.navigateByUrl("/dashboard").then();
        } else {
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
