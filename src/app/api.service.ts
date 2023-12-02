import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4001'; // Reemplaza con la URL de tu servidor Express

  constructor(private http: HttpClient) {}

  // Rutas para Personajes
  getPersonajes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/personajes`);
  }

  getPersonajeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/personajes/${id}`);
  }

  agregarPersonaje(personaje: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/personajes`, personaje);
  }

  actualizarPersonaje(id: string, datos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/personajes/${id}`, datos);
  }

  eliminarPersonaje(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/personajes/${id}`);
  }

  // Otros métodos para otras rutas de tu API según sea necesario
}
