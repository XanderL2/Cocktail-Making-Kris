import { Component, Input } from '@angular/core';
import { Drink } from '../../models/Drink';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {

  @Input({required: true}) drink!: Drink;


}
