import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUsuarioConquiatadorPage } from './nuevo-usuario-conquiatador.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoUsuarioConquiatadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoUsuarioConquiatadorPageRoutingModule {}
