import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarActualizarTareaPage } from './agregar-actualizar-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarActualizarTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarActualizarTareaPageRoutingModule {}
