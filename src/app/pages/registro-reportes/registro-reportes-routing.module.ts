import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroReportesPage } from './registro-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroReportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroReportesPageRoutingModule {}
