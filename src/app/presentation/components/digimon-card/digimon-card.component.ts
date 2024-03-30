import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Digimon } from '@interfaces/digimon-response.interface';
import { IonCard, IonCardSubtitle, IonCardHeader, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrl: './digimon-card.component.css',
})
export class DigimonCardComponent {
  @Input() digimon!: Digimon;
  imageError: boolean = false;

  errorImage(digimon: Digimon) {
    digimon.image = '../../../../assets/images/digimon_game.png';
  }
 }
