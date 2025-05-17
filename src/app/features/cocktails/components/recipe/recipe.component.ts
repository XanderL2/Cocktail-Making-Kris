import { Component, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { ToRangePipe } from '@shared/pipes/to-range.pipe';

@Component({
  selector: 'app-recipe',
  imports: [ToRangePipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

  @Input({required: true}) drink!: Drink;
  public ingredients: string[] = ['Adelhyde', 'Powered Delta', '']


}
