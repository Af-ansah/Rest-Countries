import { Component,  Input } from '@angular/core';
import { CountryInfo } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input()
  country!: CountryInfo;
}
