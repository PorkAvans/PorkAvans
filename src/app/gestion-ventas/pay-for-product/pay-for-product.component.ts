import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-for-product',
  templateUrl: './pay-for-product.component.html',
  styleUrls: ['./pay-for-product.component.scss']
})
export class PayForProductComponent {
  constructor(
    public dialogRef: MatDialogRef<PayForProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any
  ) {}

  confirmPayment() {
    // Aquí puedes manejar la lógica para confirmar el pago
    console.log('Pago confirmado para:', this.product);
    this.dialogRef.close();
  }
}
