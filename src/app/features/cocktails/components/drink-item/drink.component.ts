import { Component, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drink',
  imports: [CommonModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.scss'
})
export class DrinkItemComponent {

  @Input({required: true}) drink!: Partial<Pick<Drink, 'id' | 'name' | 'price' | 'filenameFull'>>;
  @Input() onClickDrink!: (event: MouseEvent, id: number) => void;




}
