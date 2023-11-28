import { AgregarActualizarTareaPage } from './../agregar-actualizar-tarea/agregar-actualizar-tarea.page';
import { Component, OnInit } from '@angular/core';
import { Actividades } from 'src/app/models/actividades.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
agregarActualizarTarea(arg0: Actividades[]) {
throw new Error('Method not implemented.');
}


  actividades: Actividades[]=[
    {
      id: 1,
      titulo: 'Dezarrollo de requisitos',
      descripcion:'Desarrollamos de los requisitos de la especialidad de arte de acampar ',
      items:[
        { nombre:'Actividad 1', completado:true},
        { nombre:'Actividad 2', completado:false},
        { nombre:'Actividad 3', completado:false},
      ]
    },

    {
      id: 2,
      titulo: 'Dezarrollo de requisitos',
      descripcion:'Desarrollamos de los requisitos de la especialidad de arte de acampar ',
      items:[
        { nombre:'Actividad 1', completado:true},
        { nombre:'Actividad 2', completado:true},
        { nombre:'Actividad 3', completado:false},
      ]
    },

    {
      id: 3,
      titulo: 'Dezarrollo de requisitos',
      descripcion:'Desarrollamos de los requisitos de la especialidad de arte de acampar ',
      items:[
        { nombre:'Actividad 1', completado:true},
        { nombre:'Actividad 2', completado:true},
        { nombre:'Actividad 3', completado:true},
      ]
    },
    {
      id: 4,
      titulo: 'Dezarrollo de requisitos',
      descripcion:'Desarrollamos de los requisitos de la especialidad de arte de acampar ',
      items:[
        { nombre:'Actividad 1', completado:false},
        { nombre:'Actividad 2', completado:false},
        { nombre:'Actividad 3', completado:false},
      ]
    }
  ]

  constructor(
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    // this.(this.actividades[0])
  }
  

  getPercentage(actividad: Actividades){
    return this.utilsSvc.getPercentage(actividad)
  }

  // agregarOActualizarTarea(actividad?: Actividades){
  //   this.utilsSvc.presentModal({
  //     component: agregarActualizarTarea
  //     componentProps: {actividad},
  //     cssClass:''
  //   })
  // }
}
