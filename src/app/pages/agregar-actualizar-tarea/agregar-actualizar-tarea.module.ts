import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarActualizarTareaPageRoutingModule } from './agregar-actualizar-tarea-routing.module';

import { AgregarActualizarTareaPage } from './agregar-actualizar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarActualizarTareaPageRoutingModule
  ],
  declarations: [AgregarActualizarTareaPage]
})
export class AgregarActualizarTareaPageModule {}
