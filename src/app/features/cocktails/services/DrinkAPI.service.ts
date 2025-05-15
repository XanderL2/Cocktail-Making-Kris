import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { DrinkAdapter } from '../adapters/Drink.adapter';
import { Drink } from '../models/Drink';
import { Filters } from '../models/Filters';


@Injectable({
  providedIn: 'root'
})
export class DrinkAPIService {

  private http: HttpClient = inject(HttpClient);
  private cocktailURL: string = environment.API_URL + "/api/drinks";




  public getAll(): Observable<Drink[]> {
    return this.http.get<Observable<Drink>>(this.cocktailURL)
      .pipe(
        map((drinks: any) => DrinkAdapter.parseDrinks(drinks))
      );
  }


  //? Filters:
  public searchWithFilters(filters: Filters): Observable<Drink[]> {

    let queryParams = new HttpParams();

    if (filters.name) queryParams = queryParams.set('name', filters.name);
    if (filters.flavour) queryParams = queryParams.set('flavour', filters.flavour);
    if (filters.alcoholic !== undefined) queryParams = queryParams.set('alcoholic', String(filters.alcoholic));
    if (filters.type) queryParams = queryParams.set('type', filters.type);
    if (filters.type !== undefined) queryParams = queryParams.set('orderByPrice', String(filters.orderAscendingByPrice));


    return this.http.get(this.cocktailURL, { params: queryParams })
      .pipe(
        map((drinks: any) =>{
          return DrinkAdapter.parseDrinks(drinks)
        } )
      );
  }



}
