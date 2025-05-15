import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Drink } from '../models/Drink';
import { DrinkAPIService } from './DrinkAPI.service';
import { Filters } from '../models/Filters';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  //? Services:
  private DrinkApi = inject(DrinkAPIService);

  //? Observables:
  private $currentDrink = new BehaviorSubject<Drink | null>(null);
  private $relatedDrinks = new BehaviorSubject<Drink[]>([]);
  private $dataOrigin = new BehaviorSubject<'default'| 'filter'>('default');


  //? Methods:
  public GetRelatedDrinks(filter: Filters): void {

    const fetch$ = this.$dataOrigin.value === 'filter'
                  ? this.DrinkApi.searchWithFilters(filter)
                  : this.DrinkApi.getAll();

    fetch$.subscribe((drinks: Drink[]) => {
      this.$relatedDrinks.next(drinks);
      if(this.$dataOrigin.value === 'default') this.$currentDrink.next(drinks[0]);
    });
  }

  //? Getters and setters:
  public get relatedDrinks() : Observable<Drink[]>{
    return this.$relatedDrinks.asObservable();
  }

  public set dataOrigin(newValue: 'default' | 'filter' ) {
    this.$dataOrigin.next(newValue);
  }

  public get currentDrink() : Observable<Drink | null>{
    return this.$currentDrink.asObservable();
  }

  public set currentDrink(newDrink : Drink) {
    this.$currentDrink.next(newDrink);
  }



}
