import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConquistadoresPage } from './conquistadores.page';

const routes: Routes = [
  {
    path: '',
    component: ConquistadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConquistadoresPageRoutingModule {}
