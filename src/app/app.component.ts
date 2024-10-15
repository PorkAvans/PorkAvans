import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tu-app';
}






// import { Component } from '@angular/core';
// import { AuthService } from './auth.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent  {
//   title = 'my-app';
//   username: string = '';
//   password: string = '';
//
//   constructor(private authService: AuthService, private router: Router) {}
//
//   login() {
//     this.authService.login(this.username, this.password).subscribe({
//       next: (response) => {
//         console.log('Login successful', response);
//         localStorage.setItem('access_token', response.access_token); // Almacena el token en localStorage
//         this.router.navigate(['/dashboard']); // Redirige al dashboard u otra ruta protegida
//       },
//       error: (error) => {
//         console.error('Login failed', error);
//         // Maneja errores, como mostrar un mensaje de error en la UI
//       }
//     });
//   }
// }
