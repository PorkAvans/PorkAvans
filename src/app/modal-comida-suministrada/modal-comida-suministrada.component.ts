import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-modal-comida-suministrada',
  templateUrl: './modal-comida-suministrada.component.html',
  styleUrls: ['./modal-comida-suministrada.component.scss']
})
export class ModalComidaSuministradaComponent {
  nuevoProducto = {
    user: '',
    corral_id: 0,
    producto_id: 0,
    cantidad: 0
  };

  constructor(
    public dialogRef: MatDialogRef<ModalComidaSuministradaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService  // Inyectar AuthService
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Formulario enviado', this.nuevoProducto);

    this.authService.agregarComidaSuministrada(this.nuevoProducto).subscribe({
      next: (response) => {
        console.log('Respuesta de la API', response);

        // Verificar si la respuesta contiene un código de error
        if (response.codigo_respuesta && response.codigo_respuesta.startsWith('D')) {
          // Si hay un código de error, mostrar una alerta de error
          Swal.fire({
            title: '¡Error!',
            text: response.mensaje_salida || 'Hubo un problema al agregar la comida suministrada.',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        } else {
          // Si no hay código de error, mostrar una alerta de éxito
          Swal.fire({
            title: '¡Operación Exitosa!',
            text: response.mensaje_salida || 'La comida suministrada ha sido registrada correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.dialogRef.close(this.nuevoProducto);  // Cerrar el modal después de confirmar la alerta
          });
        }
      },
      error: (error) => {
        console.error('Error al agregar comida suministrada', error);
        // Mostrar alerta de error
        Swal.fire({
          title: '¡Error!',
          text: error.error.detail || 'Hubo un problema al agregar la comida suministrada.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    });
  }
}
