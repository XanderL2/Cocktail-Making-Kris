import { Component, inject, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { DrinkItemComponent } from "../drink-item/drink.component";
import { DrinkService } from '../../services/Drink.service';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-drink-list',
  imports: [DrinkItemComponent, ButtonComponent, MatIconModule],
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent {

  private drinkService = inject(DrinkService);

  @Input({required: true}) drinks: Drink[] = [];
  
  public onCLickDrink = (event: MouseEvent, id: number) => {

    const drink: Drink | undefined = this.drinks.find(drink => drink.id === id); 

    if(!drink){
      console.error("Drink selected is undefined");
    }

    this.drinkService.currentDrink = drink!;
  }

  public removeFilters = () =>  {
    this.drinkService.dataOrigin = 'default';
    this.drinkService.GetRelatedDrinks({}); 
  }

}
