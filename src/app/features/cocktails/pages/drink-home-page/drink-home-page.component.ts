import { Component, inject, OnInit } from '@angular/core';
import { TermComponent } from "../../../../shared/components/term/term.component";
import { Drink } from '../../models/Drink';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DrinkService } from '../../services/Drink.service';
import { DataState } from '../../../../core/models/Data';
import { DrinkItemComponent } from "../../components/drink-item/drink.component";
import { DrinkListComponent } from "../../components/drink-list/drink-list.component";
import { RecipeComponent } from "../../components/recipe/recipe.component";
import { CurrrentDrinkComponent } from "../../components/currrent-drink/currrent-drink.component";

@Component({
  selector: 'app-drink-home-page',
  imports: [TermComponent, CommonModule, DrinkItemComponent, DrinkListComponent, RecipeComponent, CurrrentDrinkComponent],
  templateUrl: './drink-home-page.component.html',
  styleUrl: './drink-home-page.component.scss'
})
export class DrinkHomePageComponent implements OnInit {
  
  private drinks: DrinkService = inject(DrinkService);
  public $currentDrink!: Observable<Drink | null>; 
  public $relatedDrinks!: Observable<DataState<Drink[]>>; 


  constructor(){
    this.$currentDrink = this.drinks.currentDrink;
    this.$relatedDrinks = this.drinks.relatedDrinks;
  }


  ngOnInit(): void {
      this.drinks.dataOrigin = 'default';
      this.drinks.GetRelatedDrinks({})
  }

}
