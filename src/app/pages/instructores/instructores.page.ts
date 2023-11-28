import { Component, OnInit } from '@angular/core';

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

  loginUsuario(){
    
  }

}
