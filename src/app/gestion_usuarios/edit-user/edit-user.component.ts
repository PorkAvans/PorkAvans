import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editUserForm!: FormGroup;  // Formulario reactivo para editar el usuario
  userId!: string;  // ID del usuario que se está editando
  token: string = '';  // Token para la autenticación
  imageUrl: string | ArrayBuffer | null = ''; // Para previsualización de la imagen

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    this.userId = this.route.snapshot.paramMap.get('id')!;  // Obtiene el ID del usuario desde la ruta
    this.initForm();  // Inicializa el formulario
    this.fetchUserData();  // Obtén los datos del usuario y llena el formulario
  }

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

  // Obtiene los datos del usuario y llena el formulario
  private fetchUserData() {
    
 this.authService.getUsuarioPorId(this.userId, this.token).subscribe({
    next: (user) => {
      console.log(user);
      this.editUserForm.patchValue({        
        imagen: user.imagen,       // Asegúrate de que la propiedad 'imagen' esté correctamente enlazada
        nombre: user.nombre,
        celularr: user.celular,    // Cambia 'celularr' por 'celular' si es necesario
        correo: user.correo,
        rol: user.user_rol,        // Asegúrate de que 'rol' coincida con 'user_rol'
      });
      this.imageUrl = 'data:image/jpeg;base64,' + user.imagen;  // Previsualización de imagen
    },
    error: (error) => {
      console.error('Error al obtener el usuario:', error);
    }
  });
  }

  // Envía el formulario
  onSubmit() {
    // if (this.editUserForm.valid) {
    //   this.authService.updateUser(this.userId, this.editUserForm.value, this.token).subscribe({
    //     next: () => {
    //       console.log('Usuario actualizado con éxito');
    //       this.router.navigate(['/gestion_usuarios/view-user']);  // Redirige después de actualizar
    //     },
    //     error: (error) => {
    //       console.error('Error al actualizar el usuario:', error);
    //     }
    //   });
    // }
  }

  // Cancela la edición y redirige
  cancel() {
    this.router.navigate(['/gestion_usuarios/view-user']);
  }

  // Maneja la selección de archivo para la imagen
// Variable para almacenar el archivo de imagen
fileImage: File | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    this.fileImage = input.files[0]; // Guarda el archivo para enviar al backend

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string; // Actualiza la previsualización en el componente
    };
    reader.readAsDataURL(this.fileImage);
  }
}

}
