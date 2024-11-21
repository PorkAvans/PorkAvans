import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, Sale } from '../../auth.service';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit {
  sales: Sale[] = [];
  displayedColumns: string[] = [
    'asociado_id',     // ID del asociado
    'name',            // Nombre
    'cantidad',        // Cantidad
    'fecha_venta',     // Fecha de venta
    'total_venta',     // Total de la venta
    'comision_generada', // Comisión generada
    'estado_venta'     // Estado de la venta
  ];
  dataSource = new MatTableDataSource<Sale>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const associateId = localStorage.getItem('user_id');
    if (!associateId) {
      console.error('No se encontró el ID del asociado en el localStorage');
      return;
    }

    // Configurar el filtro personalizado
    this.dataSource.filterPredicate = (data: Sale, filter: string): boolean => {
      const normalizedFilter = filter.trim().toLowerCase();
      return (
        data.asociado_id.toString().toLowerCase().includes(normalizedFilter) ||
        data.name.toLowerCase().includes(normalizedFilter) ||
        data.estado_venta.toLowerCase().includes(normalizedFilter)
      );
    };

    // Obtener los datos (ventas) desde el servicio
    this.authService.getSales(associateId).subscribe(
      (data: Sale[]) => {
        this.sales = data;
        this.dataSource.data = data;

        // Configurar el paginador después de cargar los datos
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        });
      },
      (error) => {
        console.error('Error al obtener las ventas:', error);
      }
    );
  }

  // Filtro de búsqueda
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
