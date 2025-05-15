import { Component, Input } from '@angular/core';
import { Drink } from '../../models/Drink';

@Component({
  selector: 'app-drink',
  imports: [],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.scss'
})
export class DrinkItemComponent {

  @Input({required: true}) drink!: Partial<Pick<Drink, 'id' | 'name' | 'price' | 'filenameFull'>>;
  @Input() onClickDrink!: (event: MouseEvent, id: number) => void;




}
