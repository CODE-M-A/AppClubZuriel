import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConquistadoresPageRoutingModule } from './conquistadores-routing.module';

import { ConquistadoresPage } from './conquistadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConquistadoresPageRoutingModule
  ],
  declarations: [ConquistadoresPage]
})
export class ConquistadoresPageModule {}
