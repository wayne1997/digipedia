import { Component, Input } from '@angular/core';
import { Digimon } from '@interfaces/digimon-response.interface';


@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
})
export class DigimonCardComponent {
  @Input() digimon!: Digimon;
  imageError: boolean = false;

  errorImage(digimon: Digimon) {
    digimon.image = '../../../../assets/images/digimon_game.png';
  }
 }
