import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadesPageRoutingModule } from './actividades-routing.module';

import { ActividadesPage } from './actividades.page';

import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  exports:[NgCircleProgressModule],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadesPageRoutingModule,
    NgCircleProgressModule.forRoot({
    
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
     })
  ],
  declarations: [ActividadesPage]
})
export class ActividadesPageModule {}
