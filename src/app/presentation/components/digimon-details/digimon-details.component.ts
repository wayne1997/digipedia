import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonButtons, IonButton, IonIcon, IonImg } from "@ionic/angular/standalone";
import { DigimonService } from '../../services/digimon.service';
import { DigimonDetailResponse } from '@interfaces/digimon-details-response.interface';
import { ModalController } from '@ionic/angular';
import { DigimonAttributesComponent } from '../../components/digimon-attributes/digimon-attributes.component';
import { DigimonFieldComponent } from '../../components/digimon-field/digimon-field.component';

@Component({
  selector: 'app-digimon-details',
  providers: [DigimonService, ModalController],
  templateUrl: './digimon-details.component.html',
  styleUrl: './digimon-details.component.css',
})
export class DigimonDetailsComponent implements OnInit{

  @Input() digimonId!: number;
  digimonDetail?: DigimonDetailResponse;
  isLoading: boolean = true;

  constructor(private _digimonService: DigimonService, private _modalCtrl: ModalController) {}

  async ngOnInit() {
    this._digimonService.getDigimon(this.digimonId).subscribe(
      (data: DigimonDetailResponse) => {
        this.digimonDetail = data;
        this.isLoading = false;
      }
    );
  }

  closeModal(){
    this._modalCtrl.dismiss();
  }
  onErrorImage(digimonDetail: DigimonDetailResponse) {
    console.log(digimonDetail)
    digimonDetail.images[0].href = '../../../../assets/images/digimon_game.png';
  }
}
