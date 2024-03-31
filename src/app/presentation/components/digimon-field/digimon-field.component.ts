import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Field } from '@interfaces/digimon-details-response.interface';

@Component({
  selector: 'app-digimon-field',
  templateUrl: './digimon-field.component.html',
  styleUrl: './digimon-field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigimonFieldComponent {
  @Input() fields!: Field[];
}
