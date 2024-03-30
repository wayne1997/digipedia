import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Attribute, Level, Type } from '@interfaces/digimon-details-response.interface';

@Component({
  selector: 'app-digimon-attributes',
  templateUrl: './digimon-attributes.component.html',
  styleUrl: './digimon-attributes.component.css',
})
export class DigimonAttributesComponent {
  @Input() levels!: Level[];
  @Input() attributes!: Attribute[];
  @Input() types!: Type[];
}
