import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Actividades } from '../models/actividades.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  routerLink(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController,
    private modalController: ModalController
  ) { }
//===loading
//present
  async presentLoading(opts:LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }
//==dismiss
  async dismissLoading(){
    return await this.loadingController.dismiss()
  }

  //====localstorage
  //set

  setElementInLocalstorage(key: string, element:any){
    return localStorage.setItem(key, JSON.stringify(element))
  }
//get
  getElementInLocalstorage(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }
//========router
  RouterLink(url:string){
    return this.router.navigateByUrl(url);
  }
///===============Modal=============
//Present

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalController.create(opts);
  
    await modal.present();
    const {data}= await modal.onWillDismiss();

    if (data){
        return data;
    }
  
  }
//Dismiss
  dismissModal(data?: any){
    this.modalController.dismiss(data);
  }


  getPercentage(actividad: Actividades){
    let completedItems = actividad.items.filter(item => item.completado).length;
    let totalItems = actividad.items.length;
    let percentage = (100 / totalItems) * completedItems
  
    return parseInt(percentage.toString())
}
}
