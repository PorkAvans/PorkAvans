import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';  // Importa SweetAlert2

@Component({
  selector: 'app-modal-agregar-producto',
  templateUrl: './modal-agregar-producto.component.html',
  styleUrls: ['./modal-agregar-producto.component.scss']
})
export class ModalAgregarProductoComponent {
  nuevoProducto: any = {
    user: '',
    distribuidor_nombre: '',
    fecha_recoleccion: '',
    cantidad_producto: '',    
    producto_id: ''
  };

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService  // Inyectar AuthService
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log('Formulario enviado', this.nuevoProducto);

    this.authService.agregarProductoRecolectado(this.nuevoProducto).subscribe({
      next: (response) => {
        console.log('Respuesta de la API', response);

        // Verificar si la respuesta contiene un código de error
        if (response.codigo_respuesta && response.codigo_respuesta.startsWith('D')) {
          // Si hay un código de error, mostrar una alerta de error
          Swal.fire({
            title: '¡Error!',
            text: response.mensaje_salida || 'Hubo un problema al agregar el producto.',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        } else {
          // Si no hay código de error, mostrar una alerta de éxito
          Swal.fire({
            title: '¡Operación Exitosa!',
            text: 'El producto ha sido agregado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.dialogRef.close(this.nuevoProducto);  // Cerrar el modal después de confirmar la alerta
          });
        }
      },
      error: (error) => {
        console.error('Error al agregar producto recolectado', error);
        // Mostrar alerta de error
        Swal.fire({
          title: '¡Error!',
          text: error.error.detail || 'Hubo un problema al agregar el producto.',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    });
  }

}
