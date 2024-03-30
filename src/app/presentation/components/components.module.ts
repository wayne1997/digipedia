import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigimonAttributesComponent } from './digimon-attributes/digimon-attributes.component';
import { DigimonCardComponent } from './digimon-card/digimon-card.component';
import { DigimonDetailsComponent } from './digimon-details/digimon-details.component';
import { DigimonFieldComponent } from './digimon-field/digimon-field.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    DigimonAttributesComponent,
    DigimonCardComponent,
    DigimonDetailsComponent,
    DigimonFieldComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    DigimonAttributesComponent,
    DigimonCardComponent,
    DigimonDetailsComponent,
    DigimonFieldComponent
  ]
})
export class ComponentsModule { }
