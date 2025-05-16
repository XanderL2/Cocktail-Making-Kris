import { Component, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currrent-drink',
  imports: [CommonModule],
  templateUrl: './currrent-drink.component.html',
  styleUrl: './currrent-drink.component.scss'
})
export class CurrrentDrinkComponent {

  @Input({required: true}) currentDrink!: Drink;

}
