import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-instructores',
  templateUrl: './instructores.page.html',
  styleUrls: ['./instructores.page.scss'],
})
export class InstructoresPage implements OnInit {
Redireccionar(arg0: string) {
throw new Error('Method not implemented.');
}
REdireccionar(arg0: string) {
throw new Error('Method not implemented.');
}

  listaUsuariosIntructor : Usuario[]
  listasInstructor = [
    {nombre:"Jose Manuel", apellido:"Flores", unidad:"Panteras"},
    {nombre:"Juan Jose", apellido:"Merlos Alacama", unidad:"Panteras"},
    {nombre:"Jarol Natanael", apellido:"Coronel", unidad:"Tigresas"},
    {nombre:"Jacobed", apellido:"Camacho", unidad:"Panteras"},
    {nombre:"Benjamin", apellido:"Torrez", unidad:"Tigresas"},
    {nombre:"Daniel", apellido:"Quispe Flores", unidad:"Panteras"},
  ]

  lista = "hola"

  filterListas =[...this.listasInstructor];

  constructor(private userService: UsuarioService,  private location: Location) { }

  ngOnInit() {
    this.listaUsuarioInstru()
  }

  //funcion para filtrar datos
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterListas = this.listasInstructor.filter(item =>
      `${item.nombre.toLowerCase()} ${item.apellido.toLowerCase()}`.includes(searchTerm)
    );
  }

  listaUsuarioInstru(){
    this.userService.listaInstru().subscribe(
      (usuarios: Usuario[]) => {
        this.listaUsuariosIntructor = usuarios
        // Haz lo que necesites con la lista de conquistadores
      },
      (error) => {
        console.error('Error al obtener la lista de conquistadores:', error);
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
