import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, Venta } from '../models/Venta';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {

  private apiUrl = environment.API_URI + "ventas"; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener ventas
  obtenerDatos(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  // Método para crear una nueva venta (POST)
  crearVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.apiUrl, venta);
  }

  // Método para eliminar una venta (DELETE)
  eliminarVenta(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
