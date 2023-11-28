import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuReportesActividadesPage } from './menu-reportes-actividades.page';

const routes: Routes = [
  {
    path: '',
    component: MenuReportesActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuReportesActividadesPageRoutingModule {}
