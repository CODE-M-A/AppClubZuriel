import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
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

  async login(email: string, password: string): Promise<Usuario> {
    try {
      const response: AxiosResponse<Usuario> = await axios.post(
        '${this.url}/login',
        { email, password }
      );

      return response.data;
    } catch (error) {
      // Manejar errores aquí
      console.error('Error en la solicitud de login:', error);
      throw error;
    }
  }
}


//   loginUsuario(email:String, contraseña:String):Observable <Usuario> {
//     const res = this.http.get<Usuario>(this.url + '/login');
//     console.log("Lista de usuarios: ",res);
//     return res;    
//   }