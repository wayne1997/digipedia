import { Component, Input, OnInit } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { DigimonDetailResponse } from '@interfaces/digimon-details-response.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-digimon-details',
  providers: [DigimonService, ModalController],
  templateUrl: './digimon-details.component.html',
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
    digimonDetail.images[0].href = '../../../../assets/images/digimon_game.png';
  }
}
