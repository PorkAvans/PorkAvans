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
  editUserForm!: FormGroup;
  userId!: string;
  token: string = '';
  imageUrl: string | ArrayBuffer | null = '';
  initialValues: any = {}; // Para guardar los valores iniciales del usuario

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.fetchUserData();
  }

  private initForm() {
    this.editUserForm = this.fb.group({
      imagen: [''],
      nombre: ['', Validators.required],
      celularr: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required],
    });

    // Escuchar cambios en el formulario
    this.editUserForm.valueChanges.subscribe((changes) => {
      const dataToSend = this.getUpdatedFields(changes);
      this.updateUserData(dataToSend);
    });
  }

  private fetchUserData() {
    this.authService.getUsuarioPorId(this.userId, this.token).subscribe({
      next: (user) => {
        this.editUserForm.patchValue({
          imagen: user.imagen,
          nombre: user.nombre,
          celularr: user.celular,
          correo: user.correo,
          rol: user.user_rol,
        });
        this.imageUrl = 'data:image/jpeg;base64,' + user.imagen;

        // Guardar los valores iniciales
        this.initialValues = this.editUserForm.value;
      },
      error: (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    });
  }

  private getUpdatedFields(currentValues: any): any {
    // Comparar los valores iniciales con los valores actuales para detectar cambios
    const updatedFields: any = {};

    Object.keys(this.initialValues).forEach((key) => {
      updatedFields[key] = currentValues[key] !== this.initialValues[key] ? currentValues[key] : null;
    });

    return updatedFields;
  }

  private updateUserData(data: any) {
    // this.authService.updateUser(this.userId, data, this.token).subscribe({
    //     next: () => {
    //         console.log('Usuario actualizado con éxito');
    //     },
    //     error: (error) => {
    //         console.error('Error al actualizar el usuario:', error);
    //     }
    // });
}


  cancel() {
    this.router.navigate(['/gestion_usuarios/view-user']);
  }

  fileImage: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.fileImage = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.editUserForm.get('imagen')?.setValue(this.imageUrl);
      };
      reader.readAsDataURL(this.fileImage);
    }
  }

  onSubmit() {
    // if (this.editUserForm.valid) {
    //     const userData = this.editUserForm.value; // Obtiene los datos del formulario
    //     this.updateUserData(userData); // Llama al método para actualizar los datos
    // }
}

}
