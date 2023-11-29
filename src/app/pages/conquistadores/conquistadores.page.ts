import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-conquistadores',
  templateUrl: './conquistadores.page.html',
  styleUrls: ['./conquistadores.page.scss'],
})
export class ConquistadoresPage implements OnInit {

  listaUsuariosConquis : Usuario[]

  listasConquistadores = [
    {nombre:"Juan", apellido:"Merlos", unidad:"Panteras", clase:"Amigo"},
    {nombre:"Marco", apellido:"Lopez", unidad:"Panteras", clase:"Amigo"},
    {nombre:"Maria", apellido:"Pillco", unidad:"Tigresas", clase:"Amigo"},
    {nombre:"Carlos", apellido:"Mamani", unidad:"Panteras", clase:"Excursionista"},
    {nombre:"Carla", apellido:"Torrez", unidad:"Tigresas", clase:"Excursionista"},
    {nombre:"Jaime", apellido:"Quispe", unidad:"Panteras", clase:"Pionero"},
    {nombre:"Jaime", apellido:"Mamani", unidad:"Panteras", clase:"Pionero"},
    {nombre:"Cristian", apellido:"Garcia", unidad:"Lobos", clase:"Excursionista"},
    {nombre:"Rodrigo", apellido:"Velazquez", unidad:"Panteras", clase:"Excursionista"},
    {nombre:"Sebastian", apellido:"Alvarado", unidad:"Tigresas", clase:"Pionero"},
    {nombre:"Ana", apellido:"Bustos", unidad:"Panteras", clase:"Pionero"},
    {nombre:"Felipe", apellido:"Huaman", unidad:"Panteras", clase:"Pionero"},
  ]


  filterListas =[...this.listasConquistadores];
  constructor(private userService: UsuarioService, private location: Location) { }

  ngOnInit() {
    this.obtenerListaConquis()
  }

  //funcion para filtrar datos
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterListas = this.listasConquistadores.filter(item =>
      `${item.nombre.toLowerCase()} ${item.apellido.toLowerCase()} ${item.unidad.toLowerCase()} ${item.clase.toLowerCase()}`.includes(searchTerm)
    );
  }
  obtenerListaConquis() {
    this.userService.listaConquis().subscribe(
      (usuarios: Usuario[]) => {
        this.listaUsuariosConquis = usuarios
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
