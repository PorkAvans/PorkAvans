import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, ProductoRecolectado, ProductoRecolectadoResponse } from '../auth.service';
import { ModalAgregarProductoComponent } from '../modal-agregar-producto/modal-agregar-producto.component';

@Component({
  selector: 'app-recoleccion',
  templateUrl: './recoleccion.component.html',
  styleUrls: ['./recoleccion.component.scss']
})
export class RecoleccionComponent {

  columns = [
    { name: 'Distribuidor' },
    { name: 'Fecha de Recolección' },
    { name: 'Cantidad' },
    { name: 'Nombre del Producto' }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 8;
  searchTerm: string = ''; // Término de búsqueda

  data: ProductoRecolectado[] = []; // Datos sin filtrar
  filteredData: ProductoRecolectado[] = []; // Datos filtrados

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.authService.getProductosRecolectados().subscribe(
      (response: ProductoRecolectadoResponse) => {
        if (response && response.productos_recolectados) {
          this.data = response.productos_recolectados;
          this.filteredData = this.data; // Inicialmente, los datos filtrados son los mismos que los datos originales
        } else {
          console.error('La respuesta no contiene productos recolectados');
        }
      },
      (error: any) => {
        console.error('Error fetching collected products', error);
      }
    );
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalAgregarProductoComponent, {
      width: '250px',
      data: {} // Puedes pasar datos al diálogo si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aquí puedes manejar el resultado después de que se cierre el diálogo
      console.log('The dialog was closed');
    });
  }

  get pagedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  filterData() {
    this.filteredData = this.data.filter(producto => 
      Object.values(producto).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
    this.currentPage = 1; // Resetear a la primera página al filtrar
  }
}
