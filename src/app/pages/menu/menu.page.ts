import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rol : number 
  usuario: Usuario

  constructor(private router: Router) { }

  
  ngOnInit() {
    const user = this.router.getCurrentNavigation()?.extras.state?.['usuario'];
  
    if (user) {
      this.rol = user.data.idRol      
      
    } else {
      console.error('No se encontraron datos del usuario en la ruta.');
    }
  }
}