import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';  // Usamos el servicio AuthService
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-view-presale',
  templateUrl: './view-presale.component.html',
  styleUrls: ['./view-presale.component.scss']
})
export class ViewPresaleComponent implements OnInit {

  private presalesSubject = new BehaviorSubject<any[]>([]);  // Iniciar con un array vacío
  presales$: Observable<any[]> = this.presalesSubject.asObservable();  // Hacerlo observable
  errorMessage: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadPresales();
  }

  loadPresales(): void {
    this.authService.getPendingSalesEvaluation().subscribe(
      (response: any) => {
        console.log('Respuesta de la API:', response); // Verifica la respuesta
        if (response.status === 1) {
          console.log('Datos de las preventas:', response.data); // Verifica los datos
          this.presales$ = response.data;  // Asigna los datos de las preventas
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
  
  
}
