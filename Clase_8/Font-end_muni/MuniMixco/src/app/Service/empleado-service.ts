import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadosInterface } from '../interfaces/empleados-interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:7148/api/Empleados';
  
  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<EmpleadosInterface[]> {
    return this.http.get<EmpleadosInterface[]>(this.apiUrl);
  
  }
  agregarEMpleado(empleado: EmpleadosInterface): Observable<EmpleadosInterface> {
    return this.http.post<EmpleadosInterface>(this.apiUrl, empleado);
}
  actualizarEmpleado(id: number, empleado: EmpleadosInterface): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado);
  }
  eliminarEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); 
 }  
  }
