import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private readonly _alertCtrl: AlertController) {}

  async showMessageAlert(title: string, body: string){
    const alert = await this._alertCtrl.create({
      header: title,
      message: body,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
