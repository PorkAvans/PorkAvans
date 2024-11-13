// product-sale-description.component.ts
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
  productLink: string | null = null;
  associateId: string = 'someAssociateId'; // Este valor debe obtenerse dinámicamente

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
    const userId = localStorage.getItem('user_id');
    if (this.productSale && userId) {
      console.log('info', this.productSale, userId);
  
      // Llamada al servicio para obtener el enlace con productSaleId y associateId
      this.authService.getProductLinkByIdAndAssociate(this.productSale.product_sale_id, userId).subscribe({
        next: (link) => {
          this.productLink = link;  // Aquí asignamos el enlace recibido
          console.log('Enlace generado:', this.productLink);
          alert(`Enlace generado: ${this.productLink}`);
        },
        error: (error) => {
          console.error('Error al generar el enlace:', error);
          if (error.status === 403) {
            alert(`No se puede generar el enlace: ${error.error.detail}`);
          } else {
            alert('Hubo un problema al generar el enlace.');
          }
        }
      });
    } else {
      alert('No se pudo generar el enlace porque falta información del producto o del usuario.');
    }
  }
   
  
}
