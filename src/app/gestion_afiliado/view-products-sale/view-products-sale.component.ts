import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, ProductSaleAfiliado  } from '../../auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-products-sale',
  templateUrl: './view-products-sale.component.html',
  styleUrls: ['./view-products-sale.component.scss']
})
export class ViewProductsSaleComponent implements OnInit {
  displayedColumns: string[] = [
    'asociado',
    'producto',
    'categoria',
    'comision',
    'cantidadDisponible',
    'fechaInicio',
    'opcion'
  ];
  dataSource = new MatTableDataSource<ProductSaleAfiliado>();
  totalRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts(): void {
    const associateId = localStorage.getItem('user_id');

    if (!associateId) {
      console.error('No se encontró el ID del usuario en localStorage');
      return;
    }

    this.authService.getProductsByAssociate(associateId)
      .pipe(
        catchError(error => {
          console.error('Error al cargar los productos:', error);
          return throwError(error);
        })
      )
      .subscribe((products: ProductSaleAfiliado[]) => {
        console.log(products);
        this.dataSource.data = products; // Asignar los datos correctamente
        this.totalRecords = products.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  generateLink(element: ProductSaleAfiliado): void {
    const userId = localStorage.getItem('user_id');
    
    if (element && userId) {
      console.log('Información para generar el enlace:', element, userId);
  
      this.authService.getProductLinkByIdAndAssociate(element.product_sale_id, userId).subscribe({
        next: (link) => {
          console.log('Enlace generado:', link);
          alert(`Enlace generado: ${link}`);
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
  

  onEdit(element: ProductSaleAfiliado) {
    console.log('Editar', element);
  }

  onDelete(element: ProductSaleAfiliado) {
    console.log('Eliminar', element);
  }
}
