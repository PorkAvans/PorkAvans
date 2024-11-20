import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../auth.service'; // Importar el servicio que acabas de crear
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-presale',
  templateUrl: './update-presale.component.html',
  styleUrls: ['./update-presale.component.scss'],
})
export class UpdatePresaleComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe los datos de la preventa
    private dialogRef: MatDialogRef<UpdatePresaleComponent>,
    private authService: AuthService // Inyectamos el servicio
  ) {
    // Inicializar observación si no está presente
    if (!this.data.observacion) {
      this.data.observacion = '';
    }
  }

  // Método para cerrar el modal sin guardar cambios
  close(): void {
    this.dialogRef.close();
  }

  // Método para guardar cambios y cerrar el modal
  saveChanges(updatedData: any): void {
    // Estructuramos los datos según el formato requerido por el backend
    const dataToSend = {
      status_sale: updatedData.estado_pre_venta,  // "APROBADA" o "RECHAZADA"
      pre_sale_id: updatedData.pre_venta_id,     // ID de la preventa (número entero)
      observation: updatedData.observacion       // La observación del formulario
    };
  
    console.log("Datos enviados:", dataToSend);  // Verifica que los datos estén correctamente estructurados
  
    this.authService.changePreSaleStatus(dataToSend).subscribe(
      (response) => {
        console.log('Estado de la pre-venta actualizado con éxito', response);
        this.dialogRef.close(updatedData);  // Cierra el modal si se guardaron los cambios
      },
      (error: HttpErrorResponse) => {
        console.error('Error al actualizar el estado de la pre-venta', error);
        alert('Ocurrió un error al actualizar el estado. Intenta nuevamente.');
      }
    );
  }
  
}
