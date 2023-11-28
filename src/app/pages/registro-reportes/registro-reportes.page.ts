import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-reportes',
  templateUrl: './registro-reportes.page.html',
  styleUrls: ['./registro-reportes.page.scss'],
})
export class RegistroReportesPage implements OnInit {

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


  observaciones: string='';

  agregarDescripcion() {
    // Puedes hacer lo que necesites con la descripción, por ejemplo, imprimir en la consola
    console.log('Descripción del reporte:', this.observaciones);
    
    // Aquí podrías realizar otras acciones, como enviar la descripción a un servicio, etc.
  }

  constructor() { }

  ngOnInit() {
  }
  //funcion para filtrar datos
  filterItems(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterListas = this.listasInstructor.filter(item =>
      `${item.nombre.toLowerCase()} ${item.apellido.toLowerCase()}`.includes(searchTerm)
    );
  }

}
