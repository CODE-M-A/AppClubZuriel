import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuReportesActividadesPageRoutingModule } from './menu-reportes-actividades-routing.module';

import { MenuReportesActividadesPage } from './menu-reportes-actividades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuReportesActividadesPageRoutingModule
  ],
  declarations: [MenuReportesActividadesPage]
})
export class MenuReportesActividadesPageModule {}
