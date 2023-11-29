import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RolService } from 'src/app/services/rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  usuario: Usuario = {
    id: 0, // o el valor por defecto que desees
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    idRol: 0, // o el valor por defecto que desees
    rol: undefined, // o el valor por defecto que desees
    creadoEn: new Date(),
    actualizadoEn: new Date()
  };
  roles: Rol[]

  constructor(private usuarioService: UsuarioService,private router:Router, private rolService: RolService, private location: Location) { }

  ngOnInit() {
    this.obtenerRoles()
  }

  registroUsuario(){
    const roles : any = this.usuario.rol
    
    this.usuario.idRol = roles.idRol
    // const Roles = roles.idRol
    this.usuarioService.registroUsuario(this.usuario)
    .subscribe(
      (usuario: Usuario) => {
        console.log('Registro exitoso:', usuario);
        // this.router.navigate(['/menu']);
        this.location.back();
      },
      (error) => {
        console.error('No se pudo registrar:', error);
      }
    );
  }

  obtenerRoles() {
    this.rolService.listaRol().subscribe(
      (roles: Rol[]) => {
        this.roles = roles;
        console.log('Roles obtenidos:', this.roles);
      },
      (error) => {
        console.error('Error al obtener roles:', error);
      }
    );
  }

}
