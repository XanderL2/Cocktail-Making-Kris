import { Drink } from '../models/Drink';
import { environment } from '@environments/environment';

export class DrinkAdapter {

    public static parseDrink(drink: any): Drink {
        return ({...drink, filenameFull: environment.API_URL + "" + drink.filenameFull})
    }

    public static parseDrinks(apiDrink: any[]) : Drink[] {
        return apiDrink.map((drink: any) => this.parseDrink(drink));
    }

}