import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conquistadores',
  templateUrl: './conquistadores.page.html',
  styleUrls: ['./conquistadores.page.scss'],
})
export class ConquistadoresPage implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

  //funcion para filtrar datos
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterListas = this.listasConquistadores.filter(item =>
      `${item.nombre.toLowerCase()} ${item.apellido.toLowerCase()} ${item.unidad.toLowerCase()} ${item.clase.toLowerCase()}`.includes(searchTerm)
    );
  }

}
