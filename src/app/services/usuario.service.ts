import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.url

  constructor(
    private http : HttpClient, 
  ) { }

  listaUsuario():Observable <Usuario> {
    const res = this.http.get<Usuario>(this.url + '/usuarios');
    console.log("Lista de usuarios: ",res);
    return res;    
  }

  registroUsuario(DatosUsuario: Usuario): Observable<Usuario> {
    // const body = { email, password };

    return this.http.post<Usuario>(this.url + "register", DatosUsuario).pipe(
      catchError((error) => {
        console.error('Error al registrar:', error);
        return throwError(error);
      })
    );
  }

  listaConquis(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + 'usuarioConquis');
  }
  listaInstru(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + 'usuarioInstru');
  }


}
