import { Component, OnInit } from '@angular/core';
import { AuthService, Response } from '../../auth.service';  // Usamos el servicio AuthService
import { BehaviorSubject, Observable } from 'rxjs';
import { ViewImageComponent } from '../view-image/view-image.component';
import { UpdatePresaleComponent } from '../update-presale/update-presale.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-presale',
  templateUrl: './view-presale.component.html',
  styleUrls: ['./view-presale.component.scss']
})
export class ViewPresaleComponent implements OnInit {

  private presalesSubject = new BehaviorSubject<any[]>([]);  // Iniciar con un array vacío
  presales$: Observable<any[]> = this.presalesSubject.asObservable();  // Hacerlo observable
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.loadPresales();
  }



  loadPresales(): void {
    this.authService.getPendingSalesEvaluation().subscribe(
      (response: Response) => {
        console.log('Respuesta de la API:', response); // Verifica la respuesta
        if (response.status === 1) {
          console.log('Datos de las preventas:', response); // Verifica los datos
          this.presalesSubject.next(response.data);  // Actualiza el BehaviorSubject con los datos de preventa
        } else {
          this.errorMessage = 'No hay ventas pendientes en evaluación.';
        }
      },
      (error) => {
        this.errorMessage = 'Error al obtener las ventas pendientes.';
        console.error(error);
      }
    );
  }

  updateSale(sale: any): void {
    const dialogRef = this.dialog.open(UpdatePresaleComponent, {
      width: '40%', // Tamaño del modal
      data: sale,   // Pasar la preventa seleccionada
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos actualizados:', result);
        this.loadPresales(); // Recargar la lista si se guarda algún cambio
      }
    });
  }
  

  openImageModal(imageUrl: string): void {
    this.dialog.open(ViewImageComponent, {
      width: '40%',
      data: { imageUrl } // Pasamos la URL de la imagen como datos al modal
    });

  }
}
