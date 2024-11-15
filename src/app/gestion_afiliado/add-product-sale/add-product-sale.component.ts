import { Component, OnInit } from '@angular/core';
import { AuthService, ProductSale } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-sale',
  templateUrl: './add-product-sale.component.html',
  styleUrls: ['./add-product-sale.component.scss']
})
export class AddProductSaleComponent implements OnInit {
  productos: ProductSale[] = [];
  productosPaginados: ProductSale[] = [];
  productosPorPagina: number = 9;
  paginaActual: number = 1;
  user_id: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id') || '';
    this.authService.getProductsSales(this.user_id).subscribe({
      next: (response: ProductSale[]) => {
        this.productos = response;
        this.actualizarProductosPaginados();
      },
      error: (error) => {
        console.error('Error al obtener los productos de ventas:', error);
      }
    });
  }

  actualizarProductosPaginados() {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    const fin = inicio + this.productosPorPagina;
    this.productosPaginados = this.productos.slice(inicio, fin);
  }

  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
      this.actualizarProductosPaginados();
    }
  }

  get totalPaginas(): number {
    return Math.ceil(this.productos.length / this.productosPorPagina);
  }

  // Función para redirigir al componente de descripción del producto
  promocionarProducto(productSaleId: number) {
    this.router.navigate(['/gestion_afiliado/product-sale-description', productSaleId]);
  }
  
  
}
