import { Actividades } from 'src/app/models/actividades.model';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UtilsService } from 'src/app/services/utils.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-actualizar-tarea',
  templateUrl: './agregar-actualizar-tarea.page.html',
  styleUrls: ['./agregar-actualizar-tarea.page.scss'],
})
export class AgregarActualizarTareaPage implements OnInit {

  @Input() actividades: Actividades;
  usuario = {} as Usuario

  form = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl('', [Validators.required, Validators.minLength(4)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(4)]),
    items: new FormControl([], [Validators.required, Validators.minLength(1)]),
  })

  constructor(
    private utilsSvc: UtilsService
  ) { }

  ngOnInit() {
    this.usuario = this.utilsSvc.getElementInLocalstorage('usuario')

    if (this.actividades) {

      this.form.setValue(this.actividades);
      this.form.updateValueAndValidity()
    }
  }

  getPercentage(){
    return this.utilsSvc.getPercentage(this.form.value as Actividades)
  }

}
