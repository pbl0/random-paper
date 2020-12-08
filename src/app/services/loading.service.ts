import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingController: LoadingController
  ) { }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 10000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Loading dismissed !!");
  }


  async dismiss(){
    await this.loadingController.dismiss();
  }
}
