import { Component } from '@angular/core';
import { Digimon, DigimonResponse } from '@interfaces/digimon-response.interface';
import { DigimonService } from '../../services/digimon.service';
import { ModalController } from '@ionic/angular';
import { DigimonDetailsComponent } from '../../components/digimon-details/digimon-details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animals: Digimon[] = [];
  constructor( private digimonService: DigimonService, private modalCtrl: ModalController) {
    this.digimonService.getDigimons().subscribe({
      next: (digimonResponse: DigimonResponse) => {
        this.animals = digimonResponse.content;
      },
      error: (err) => console.error(err),
    });
  }

  async openModal(digimonId: number){
    console.log(digimonId)
    const modal = await this.modalCtrl.create({
      component: DigimonDetailsComponent,
      cssClass: ['digimon-details-modal', 'custom-modal'],
      componentProps: {
        digimonId
      }
    });
    modal.present();
  }

}
