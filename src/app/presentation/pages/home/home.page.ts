import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { DigimonService } from '../../services/digimon.service';
import { DigimonDetailsComponent } from '../../components/digimon-details/digimon-details.component';
import { StorageService } from '../../services/storage.service';
import { User } from '@interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';
import { Digimon, DigimonResponse } from '@interfaces/digimon-response.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: Digimon[];
  user?: User;
  pageNumber: number = 0;

  constructor(
    private readonly _digimonService: DigimonService,
    private readonly _modalCtrl: ModalController,
    private readonly _storage: StorageService,
    private readonly _navCtrl: NavController,
    private readonly _userService: UserService,
    private readonly _alertService: AlertService,
    ) {
    this.animals = [];
   this.initVariables();
  }

  loadData(event: any){
    this.pageNumber++;
    this.initVariables();
    event.target.complete();
  }

  initVariables() {
    this._digimonService.getDigimonsBySizeAndNumber(this.pageNumber).subscribe({
      next: (digimonResponse: DigimonResponse) => {
        this.animals = [...this.animals,...digimonResponse.content];
      },
      error: (err) => console.error(err),
    });
  }

  async openModal(digimonId: number){
    const modal = await this._modalCtrl.create({
      component: DigimonDetailsComponent,
      cssClass: ['digimon-details-modal', 'custom-modal'],
      componentProps: {
        digimonId
      }
    });
    modal.present();
  }

  async ionViewWillEnter() {
    this.user = await this._storage.getItem<User>('displayName');
  }

  async logout() {
    try{
      await this._storage.clear();
      this.user = undefined;
      await this._userService.logout();
    }catch(error: any){
      this._alertService.showMessageAlert('¡Ocurrió algo!', error.message);
    }finally{
      this._navCtrl.navigateRoot('/login');
    }
  }

}
