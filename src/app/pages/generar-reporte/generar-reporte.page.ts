import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.page.html',
  styleUrls: ['./generar-reporte.page.scss'],
})
export class GenerarReportePage implements OnInit {


  listas = [
    {nombre:"Juan", apellido:"Merlos", unidad:"Panteras"},
    {nombre:"Marco", apellido:"Lopez", unidad:"Panteras"},
    {nombre:"Maria", apellido:"Pillco", unidad:"Tigresas"},
    {nombre:"Carlos", apellido:"Mamani", unidad:"Panteras"},
    {nombre:"Carla", apellido:"Torrez", unidad:"Tigresas"},
    {nombre:"Jaime", apellido:"Quispe", unidad:"Panteras"},
  ]

  lista = "hola"

  filterListas =[...this.listas];

  constructor() { }

  ngOnInit() {}

  //funcion para filtrar datos
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterListas = this.listas.filter(item =>
      `${item.nombre.toLowerCase()} ${item.apellido.toLowerCase()}`.includes(searchTerm)
    );
  }
}
