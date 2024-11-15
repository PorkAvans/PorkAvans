import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ProductData {
  asociado: string;
  producto: string;
  categoria: string;
  comision: number;
  cantidadDisponible: number;
  fechaInicio: Date;
}

const PRODUCT_DATA: ProductData[] = [
  { asociado: 'Juan', producto: 'Cerdo', categoria: 'Carne', comision: 500, cantidadDisponible: 20, fechaInicio: new Date() },
  // Agrega más datos aquí
];

@Component({
  selector: 'app-view-products-sale',
  templateUrl: './view-products-sale.component.html',
  styleUrls: ['./view-products-sale.component.scss']
})
export class ViewProductsSaleComponent implements OnInit {
  displayedColumns: string[] = ['asociado', 'producto', 'categoria', 'comision', 'cantidadDisponible', 'fechaInicio', 'opcion'];
  dataSource = new MatTableDataSource(PRODUCT_DATA);
  totalRecords: number = PRODUCT_DATA.length; // Asigna el total de registros aquí

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element: ProductData) {
    console.log('Editar', element);
  }

  onDelete(element: ProductData) {
    console.log('Eliminar', element);
  }
}
