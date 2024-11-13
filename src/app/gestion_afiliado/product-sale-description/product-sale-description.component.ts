import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService, ProductSale } from '../../auth.service';

@Component({
  selector: 'app-product-sale-description',
  templateUrl: './product-sale-description.component.html',
  styleUrls: ['./product-sale-description.component.scss']
})
export class ProductSaleDescriptionComponent implements OnInit {
  productSale: ProductSale | null = null;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productSaleId = Number(this.route.snapshot.paramMap.get('id'));
    this.authService.getProductSaleById(productSaleId).subscribe({
      next: (response: ProductSale) => {
        this.productSale = response;
      },
      error: (error) => {
        console.error('Error al obtener los detalles del producto de venta:', error);
      }
    });
  }

  // Método para volver a la página anterior
  goBack(): void {
    this.location.back();
  }

  // Método para generar el enlace
  generateLink(): void {
    if (this.productSale) {
      // Aquí puedes definir la lógica para generar el enlace o compartir el producto
      const enlace = `https://mi-sitio.com/producto/${this.productSale.product_sale_id}`;
      console.log('Enlace generado:', enlace);
      alert(`Enlace generado: ${enlace}`);
    }
  }
}
