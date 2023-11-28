import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoUsuarioConquiatadorPageRoutingModule } from './nuevo-usuario-conquiatador-routing.module';

import { NuevoUsuarioConquiatadorPage } from './nuevo-usuario-conquiatador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoUsuarioConquiatadorPageRoutingModule
  ],
  declarations: [NuevoUsuarioConquiatadorPage]
})
export class NuevoUsuarioConquiatadorPageModule {}
