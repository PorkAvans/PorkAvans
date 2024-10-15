import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Asegúrate de importar MatDialog
import { AuthService, ComidaSuministrada, ComidaSuministradaResponse } from '../auth.service';
import { ModalComidaSuministradaComponent } from '../modal-comida-suministrada/modal-comida-suministrada.component'; // Asegúrate de que esta ruta es correcta
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-comida-suministrada',
  templateUrl: './comida-suministrada.component.html',
  styleUrls: ['./comida-suministrada.component.scss']
})
export class ComidaSuministradaComponent implements OnInit {
  comidasSuministradas: ComidaSuministrada[] = [];
  filteredData: ComidaSuministrada[] = []; // Añadir esta propiedad para el filtrado
  currentPage: number = 1;
  itemsPerPage: number = 8;
  searchTerm: string = ''; // Añadir la propiedad para la búsqueda

  constructor(private authService: AuthService, public dialog: MatDialog, private datePipe: DatePipe) {} // Asegúrate de inyectar MatDialog

  formatDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'yyyy-MM-dd HH:mm') || ''; // Formato año/mes/día y hora:minutos
  }
  

  ngOnInit(): void {
    this.authService.getComidaSuministrada().subscribe(
      (response: ComidaSuministradaResponse) => {
        this.comidasSuministradas = response.comidas_suministradas.map(comida => ({
          ...comida,
          fecha_suministro: new Date(comida.fecha_suministro) // Convertir la cadena a Date
        }));
        this.filteredData = this.comidasSuministradas; // Inicialmente, los datos filtrados son los mismos que los datos originales
      },
      (error: any) => {
        console.error('Error fetching comida suministrada', error);
      }
    );
  }
  

  openModal() {
    const dialogRef = this.dialog.open(ModalComidaSuministradaComponent, {
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
    this.filteredData = this.comidasSuministradas.filter(comida => 
      Object.values(comida).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
    this.currentPage = 1; // Resetear a la primera página al filtrar
  }
}
