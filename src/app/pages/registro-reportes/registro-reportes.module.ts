import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroReportesPageRoutingModule } from './registro-reportes-routing.module';

import { RegistroReportesPage } from './registro-reportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroReportesPageRoutingModule
  ],
  declarations: [RegistroReportesPage]
})
export class RegistroReportesPageModule {}
