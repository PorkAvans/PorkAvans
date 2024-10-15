import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

interface User {
  imagen: string;
  nombre: string;
  celularr: string;
  correo: string;
  rol: string;
  estado: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm!: FormGroup;  // Formulario reactivo para editar el usuario
  userId!: string;  // ID del usuario que se está editando
  token: string = '';  // Token para la autenticación

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  // ngOnInit(): void {
  //   this.token = localStorage.getItem('access_token') || '';
  //   this.userId = this.route.snapshot.paramMap.get('id')!;  // Obtén el ID del usuario desde la ruta
  //   this.initForm();  // Inicializa el formulario
  //   this.fetchUserData();  // Obtén los datos del usuario
  // }

  // Inicializa el formulario
  private initForm() {
    this.editUserForm = this.fb.group({
      imagen: ['', Validators.required],
      nombre: ['', Validators.required],
      celularr: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  // // Obtiene los datos del usuario y llena el formulario
  // private fetchUserData() {
  //   this.authService.getUserById(this.userId, this.token).subscribe(user => {
  //     this.editUserForm.patchValue(user);  // Rellena el formulario con los datos del usuario
  //   });
  // }

  // Envía el formulario
  // onSubmit() {
  //   if (this.editUserForm.valid) {
  //     this.authService.updateUser(this.userId, this.editUserForm.value, this.token).subscribe(() => {
  //       console.log('Usuario actualizado con éxito');
  //       this.router.navigate(['/gestion_usuarios/view-user']);  // Redirige después de actualizar
  //     }, error => {
  //       console.error('Error al actualizar el usuario:', error);
  //     });
  //   }
  // }

  // Cancela la edición y redirige
  cancel() {
    this.router.navigate(['/gestion_usuarios/view-user']);
  }
}
