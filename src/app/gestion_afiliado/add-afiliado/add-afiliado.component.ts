import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-add-afiliado',
  templateUrl: './add-afiliado.component.html',
  styleUrls: ['./add-afiliado.component.scss']
})
export class AddAfiliadoComponent implements OnInit {
  addAfiliadoForm!: FormGroup;
  token: string = '';
  imageUrl: string | ArrayBuffer | null = '';
  roles: any[] = [];
  fileImage: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    this.initForm();
    this.loadRoles();
  }

  private initForm() {
    this.addAfiliadoForm = this.fb.group({
      user_imagen: [''],
      user_nombre: ['', Validators.required],
      user_password: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      user_email: ['', [Validators.required, Validators.email]],
      user_rol: [''] // Este campo será asignado con el valor 3 en onSubmit
    });
  }

  private loadRoles() {
    this.authService.getRoles(this.token).subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (error) => {
        console.error('Error al obtener los roles:', error);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.fileImage = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        const base64String = (this.imageUrl as string).split(',')[1];
        this.addAfiliadoForm.get('user_imagen')?.setValue(base64String);
      };
      reader.readAsDataURL(this.fileImage);
    }
  }

  onSubmit() {
    console.log("Formulario de afiliado enviado");
    if (this.addAfiliadoForm.valid) {
      const afiliadoData = this.addAfiliadoForm.value;
      
      // Asignar el rol siempre a 3 antes de enviar los datos
      afiliadoData.user_rol = 3;

      this.authService.createUser(afiliadoData, this.token).subscribe({
        next: () => {
          alert("AFILIADO AGREGADO CORRECTAMENTE");
          this.router.navigate(['/gestion_afiliados/view-afiliado']);
        },
        error: (error) => {
          console.error('Error al agregar el afiliado:', error);
        }
      });
    } else {
      console.error("Formulario inválido. Verifica los campos.");
    }
  }

  cancel() {
    this.router.navigate(['/gestion_afiliados/view-afiliado']);
  }
}
