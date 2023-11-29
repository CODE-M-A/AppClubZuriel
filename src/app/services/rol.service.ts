import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = environment.url

  constructor(
    private http : HttpClient, 
  ) { }

  listaRol(): Observable<Rol[]> {
    const url = this.url + "roles/";
  
    return this.http.get<Rol[]>(url).pipe(
      tap(_ => console.log('Lista de roles obtenida correctamente')),  // Puedes personalizar esto según tus necesidades
      catchError((error) => {
        console.error('Error al listar los roles:', error);
        return throwError(error);
      })
    );
  }
}
