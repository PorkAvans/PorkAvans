import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, Sale } from '../../auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-sale',
  templateUrl: './view-sale.component.html',
  styleUrls: ['./view-sale.component.scss']
})
export class ViewSaleComponent implements OnInit {
  sales: Sale[] = [];
  displayedColumns: string[] = [
    'venta_id',
    'name',
    'cantidad',
    'fecha_venta',
    'total_venta',
    'comision_generada',
    'estado_venta'
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

    this.authService.getSales(associateId).subscribe(
      (data: Sale[]) => {
        this.sales = data;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error al obtener las ventas:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
