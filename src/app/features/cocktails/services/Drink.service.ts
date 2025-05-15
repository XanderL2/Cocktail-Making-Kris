import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Drink } from '../models/Drink';
import { DrinkAPIService } from './DrinkAPI.service';
import { Filters } from '../models/Filters';
import { DataState } from '../../../core/models/Data';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  //? Services:
  private DrinkApi = inject(DrinkAPIService);

  //? Observables:
  private $currentDrink = new BehaviorSubject<Drink | null>(null);
  private $dataOrigin = new BehaviorSubject<'default'| 'filter'>('default');
  private $relatedDrinks = new BehaviorSubject<DataState<Drink[]>>({ loading: false, data: [] });


  //? Methods:
  public GetRelatedDrinks(filter: Filters): void {

    this.$relatedDrinks.next({ loading: true });

    const fetch$ = this.$dataOrigin.value === 'filter'
                  ? this.DrinkApi.searchWithFilters(filter)
                  : this.DrinkApi.getAll();

    fetch$.subscribe((drinks: Drink[]) => {
      this.$relatedDrinks.next({loading: false, data: drinks});
      if(this.$dataOrigin.value === 'default') this.$currentDrink.next(drinks[0]);
    });
  }


  //? Getters and setters:
  public get relatedDrinks() : Observable<DataState<Drink[]>>{
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
