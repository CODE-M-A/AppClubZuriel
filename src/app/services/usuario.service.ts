import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
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

}
