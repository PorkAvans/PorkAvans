import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pay-for-product',
  templateUrl: './pay-for-product.component.html',
  styleUrls: ['./pay-for-product.component.scss']
})
export class PayForProductComponent {
  preSaleData = {
    associate_id: '',
    product_id: 0,
    pre_sale_quantity: 1, // Por defecto, una unidad
    pre_sale_total_sale: 0,
    pre_sale_image: '', // Imagen del voucher
    pre_sale_status_sale: 'EN EVALUACIÓN', // Estado fijo "EN EVALUACIÓN"
    pre_sale_email: '' // Correo del comprador
  };

  constructor(
    public dialogRef: MatDialogRef<PayForProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any, // Aquí se inyectan los datos
    private authService: AuthService,
    private snackBar: MatSnackBar 
  ) {
    // Prellenar los datos básicos de la preventa con los datos del producto
    this.preSaleData.associate_id = this.product.associate_id || '';
    this.preSaleData.product_id = this.product.product_id || 0;
    this.preSaleData.pre_sale_image = this.product.product_sale_imagen || ''; // Inicializamos la imagen (si hay alguna por defecto)
    this.preSaleData.pre_sale_total_sale = this.product.price || 0; // Por defecto, el precio por 1 unidad
  }

  // Actualiza el total de la preventa basado en la cantidad
  updateTotalSale() {
    const quantity = this.preSaleData.pre_sale_quantity || 1;
    const price = this.product?.price || 0;
    this.preSaleData.pre_sale_total_sale = quantity * price;
  }

  // Función que se ejecuta al seleccionar una imagen (voucher)
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        console.error('El archivo debe ser una imagen.');
        return; // No hacer nada si el archivo no es una imagen
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        this.preSaleData.pre_sale_image = reader.result as string; // Guardamos la imagen en base64
        this.preSaleData.pre_sale_image = this.preSaleData.pre_sale_image.replace(/^data:image\/\w+;base64,/, '');
      };
      reader.readAsDataURL(file); // Leemos la imagen como base64
    }
  }
  

  // Confirmación del pago y creación de la preventa
  confirmPayment() {
    // Llama al servicio para crear la preventa
    console.log(this.preSaleData);
    this.authService.createPreSale(this.preSaleData).subscribe(
      (response) => {
        console.log('Preventa creada exitosamente:', response);
        
        // Mostrar la alerta de éxito con el mensaje de la respuesta
        this.snackBar.open(response.message, 'Cerrar', {
          duration: 3000, // Duración en milisegundos (3 segundos)
          horizontalPosition: 'right', // Posición horizontal
          verticalPosition: 'top', // Posición vertical
        });
  
        this.dialogRef.close(true); // Cierra el modal con éxito
      },
      (error) => {
        console.error('Error al crear la preventa:', error);
        // Opcional: mostrar un mensaje de error al usuario
        this.snackBar.open('Error al procesar la preventa. Intenta nuevamente.', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    );
  }
  
}
