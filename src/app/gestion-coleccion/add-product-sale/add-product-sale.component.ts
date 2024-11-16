import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router para navegar

@Component({
  selector: 'app-add-product-sale',
  templateUrl: './add-product-sale.component.html',
  styleUrls: ['./add-product-sale.component.scss']
})
export class AddProductSaleComponent {
  product = {
    name_product: '',
    price: '',
    description: '',
    category_id: 0,
    quantity: 0,
    product_sale_imagen: '',
    commissions_id: 0
  };
  
  categories = [
    { id: 1, name: 'Electrónica' },
    { id: 2, name: 'Ropa' },
    { id: 3, name: 'Alimentos' }
  ];

  commissions = [
    { id: 1, name: 'Comisión 1' },
    { id: 2, name: 'Comisión 2' }
  ];

  constructor(private router: Router) {}

  // Función que se llama cuando se hace click en "Cancelar"
  onCancel(): void {
    this.router.navigate(['./collection']);  // Navegar a la vista anterior
  }

  // Función de submit (guardar)
  onSubmit(): void {
    // Aquí iría la lógica para guardar el producto
  }

  // Función para manejar el cambio de imagen
  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.product_sale_imagen = reader.result as string;  // Guardar la imagen en base64
      };
      reader.readAsDataURL(file);
    }
  }
}
