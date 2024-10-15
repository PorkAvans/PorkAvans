import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'

interface User {  // Definición de la interfaz User
  id: number;
  imagen: string;
  nombre: string;
  celularr: string;
  correo: string;
  rol: string;
  estado: string;
}

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'imagen', 'nombre', 'celularr', 'correo', 'rol', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<any>([]);
  token: string = '';  // Token para la autenticación

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token') || '';
    this.fetchUsuariosAutenticados();
  }

  fetchUsuariosAutenticados(): void {
    if (this.token) {
      this.authService.getUsuariosAutenticados(this.token).subscribe({
        next: (data) => {
          this.dataSource.data = data;  // Almacena los usuarios obtenidos en la dataSource
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => {
          console.error('Error al obtener usuarios autenticados:', error);
        }
      });
    } else {
      console.error('Token no encontrado');  // Mensaje de error si el token no existe
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editUser(user: User) {
    // Lógica para editar el usuario
    console.log('Editar usuario:', user);
    // Aquí puedes abrir un modal o redirigir a otra página
  }

  toggleUserStatus(user: User) {
    // Lógica para activar/desactivar el usuario
    user.estado = user.estado === 'ACTIVO  ' ? 'INACTIVO' : 'ACTIVO  ';
    console.log('Estado cambiado a:', user.estado);
    // Aquí podrías hacer una llamada a un servicio para actualizar el estado en la base de datos
  }

}

