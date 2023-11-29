import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  url = environment.url

  constructor(
    private http : HttpClient, 
  ) { }

  login(email: string, password: string): Observable<Usuario> {
    const body = { email, password };

    return this.http.post<Usuario>(this.url + "login", body).pipe(
      catchError((error) => {
        console.error('Error en la solicitud de login:', error);
        return throwError(error);
      })
    );
  }
}


//   loginUsuario(email:String, contraseña:String):Observable <Usuario> {
//     const res = this.http.get<Usuario>(this.url + '/login');
//     console.log("Lista de usuarios: ",res);
//     return res;    
//   }