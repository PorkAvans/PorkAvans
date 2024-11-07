import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

// ---------------------------------------------
// Define las interfaces necesarias
export interface ComidaSuministrada {
  corral_id: string;
  producto: string;
  cantidad: number;
  fecha_suministro: Date;
  usuario: string;
}

//---------------------------------------------
// Interfaz para la respuesta del endpoint de un solo usuario
export interface UsuarioData {
  imagen: string;
  id: string;
  nombre: string;
  correo: string;
  celular: string;
  user_rol: string;
}

//--------------------------------------------
export interface ComidaSuministradaResponse {
  comidas_suministradas: ComidaSuministrada[];
}
// ---------------------------------------------
export interface ComidaSuministrada {
  corral_id: string;
  producto: string;
  cantidad: number;
  fecha_suministro: Date;
  usuario: string;
}

export interface ComidaSuministradaResponse {
  comidas_suministradas: ComidaSuministrada[];
}

// ---------------------------------------------
// Definición de la interfaz CardData
export interface CardData {
  nombre: string;
  direccion: string;
  telefono: string | null;
  imagen: string;
  descripcion: string;
}

interface TarjetasResponse {
  tarjetas: CardData[];
}

export interface GrafData {

  mes: string;
  producto_tipo: string;
  cantidad: number;
}


interface GraficaResponse {
  graficas: GrafData[];
}

// Definición de la interfaz para un producto
export interface Producto {
  nombre_producto: string;
  precio: string;
  descripcion: string;
}

// Definición de la interfaz para la respuesta que contiene productos
export interface ProductosResponse {
  productos: Producto[];
}

export interface ProductoRecolectado {
  user: string;
  distribuidor: string;
  fecha_recoleccion: string;
  cantidad_producto: number;
  nombre_producto: string;
}

// Definición de la interfaz para la respuesta que contiene productos
export interface ProductoRecolectadoResponse {
  productos_recolectados: ProductoRecolectado[];
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8000'; // URL del endpoint para obtener el token

  constructor(private http: HttpClient) {
  }

    //método para obtener roles desde el backend
    getRoles(token: string): Observable<any> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<any>(`${this.apiUrl}/user_rol/roles`, { headers });
    }

  //Metodo para actualizar un usuario 
  updateUser(id: string, data: any, token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(`${this.apiUrl}/api/update/${id}`, data, { headers });
  }


  // Método para obtener productos del stock
  getStockProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stock-products/stock-products`); // Asegúrate que esta es la ruta correcta
  }

  // Método para obtener un usuario por su ID
  public getUsuarioPorId(id: string, token: string): Observable<UsuarioData> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Incluye el token en el encabezado
    });

    return this.http.get<UsuarioData>(`${this.apiUrl}/api/user/?id=${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error al obtener el usuario', error);
        return throwError(error);
      })
    );
  }

  // Nuevo método para obtener la comida suministrada
  public getComidaSuministrada(): Observable<ComidaSuministradaResponse> {
    return this.http.get<ComidaSuministradaResponse>(`${this.apiUrl}/comida-suministrada/comida-suministrada`).pipe(
      catchError(error => {
        console.error('Error al obtener la comida suministrada', error);
        return throwError(error);
      })
    );
  }

  public getUsuariosAutenticados(token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`  // Se incluye el token en el encabezado
    });

    return this.http.get<any[]>(`${this.apiUrl}/`, { headers }).pipe(
      catchError(error => {
        console.error('Error al obtener los usuarios autenticados', error);
        return throwError(error);
      })
    );
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    let body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(this.apiUrl + '/token', body.toString(), { headers }).pipe(
      catchError(error => {
        console.error('Error en el servicio de login', error);
        return throwError(error);
      })
    );
  }

  public getUsuarios(): Observable<{ total_users: number }> {
    return this.http.get<{ total_users: number }>(`${this.apiUrl}/dashboard/total_users`).pipe(
      catchError(error => {
        console.error('Error al obtener usuarios', error);
        return throwError(error);
      })
    );
  }

  public getDeuda(): Observable<{ total_deuda: number }> {
    return this.http.get<{ total_deuda: number }>(`${this.apiUrl}/dashboard/total_deuda`).pipe(
      catchError(error => {
        console.error('Error al obtener la deuda', error);
        return throwError(error);
      })
    );
  }

  public getDistribuidores(): Observable<{ total_distribuidores: number }> {
    return this.http.get<{ total_distribuidores: number }>(`${this.apiUrl}/dashboard/total_distribuidores`).pipe(
      catchError(error => {
        console.error('Error al obtener distribuidores', error);
        return throwError(error);
      })
    );
  }

  public get_pago_mes(): Observable<{ pago_mes: number }> {
    return this.http.get<{ pago_mes: number }>(`${this.apiUrl}/dashboard/pago_mes`).pipe(
      catchError(error => {
        console.error('Error al obtener el pago del mes', error);
        return throwError(error);
      })
    );
  }

  public get_total_productos(): Observable<{ total_productos: number }> {
    return this.http.get<{ total_productos: number }>(`${this.apiUrl}/dashboard/total_productos`).pipe(
      catchError(error => {
        console.error('Error al obtener el total de productos', error);
        return throwError(error);
      })
    );
  }

  public getCardData(): Observable<CardData[]> {
    return this.http.get<TarjetasResponse>(`${this.apiUrl}/dashboard/tarjetas`).pipe(
      map(response => response.tarjetas), // Extrae el array de tarjetas de la respuesta
      catchError(error => {
        console.error('Error al obtener los datos de las tarjetas', error);
        return throwError(error);
      })
    );
  }

  public get_productos(): Observable<ProductosResponse> {
    return this.http.get<ProductosResponse>(`${this.apiUrl}/dashboard/productos`).pipe(
      catchError(error => {
        console.error('Error al obtener los productos', error);
        return throwError(error);
      })
    );
  }

  public getGrafica(): Observable<GrafData[]> {
    return this.http.get<GraficaResponse>(`${this.apiUrl}/dashboard/grafica`).pipe(
      map(response => response.graficas),
      catchError(error => {
        console.error('Error al obtener los datos de la grafica', error);
        return throwError(error);
      })
    );
  }

  public getProductosRecolectados(): Observable<ProductoRecolectadoResponse> {
    return this.http.get<ProductoRecolectadoResponse>(`${this.apiUrl}/recollection/productos-recolectados`).pipe(
      catchError(error => {
        console.error('Error al obtener los productos recolectados', error);
        return throwError(error);
      })
    );
  }

  public agregarProductoRecolectado(producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/recollection/agregar-producto-recolectado`, producto).pipe(
      catchError(error => {
        console.error('Error al agregar el producto recolectado', error);
        return throwError(error);
      })
    );
  }

  // Método para agregar comida suministrada
  public agregarComidaSuministrada(comida: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/comida-suministrada/agregar-comida-suministrada`, comida).pipe(
      catchError(error => {
        console.error('Error al agregar la comida suministrada', error);
        return throwError(error);
      })
    );
  }

  // Método para actualizar el estado del usuario
  public actualizarEstadoUsuario(userId: string, estado: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'  // Asegúrate de enviar el tipo de contenido adecuado
    });
    const url = `${this.apiUrl}/api/update_status/${userId}?status=${estado}`;

    return this.http.put<any>(url, {}, { headers }).pipe(  // El cuerpo está vacío porque los parámetros se envían como query
      catchError(error => {
        console.error('Error al actualizar el estado del usuario', error);
        return throwError(error);
      })
    );

  }


}


