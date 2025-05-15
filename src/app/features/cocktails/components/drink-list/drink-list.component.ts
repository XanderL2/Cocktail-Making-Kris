import { Component, inject, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { DrinkItemComponent } from "../drink-item/drink.component";
import { DrinkService } from '../../services/Drink.service';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  imports: [DrinkItemComponent, ButtonComponent, MatIconModule],
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent implements AfterViewInit {
  @ViewChild('drinkList', { static: true }) drinkListRef!: ElementRef;

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

  ngAfterViewInit() {
    const el = this.drinkListRef.nativeElement;
    let isDown = false, startX = 0, scrollLeft = 0;

    el.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', () => {
      isDown = false;
      el.classList.remove('active');
    });
    el.addEventListener('mouseup', () => {
      isDown = false;
      el.classList.remove('active');
    });
    el.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2; 
      el.scrollLeft = scrollLeft - walk;
    });

    // Touch events para móvil
    let touchStartX = 0, touchScrollLeft = 0;
    el.addEventListener('touchstart', (e: TouchEvent) => {
      touchStartX = e.touches[0].pageX - el.offsetLeft;
      touchScrollLeft = el.scrollLeft;
    });
    el.addEventListener('touchmove', (e: TouchEvent) => {
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - touchStartX) * 1;
      el.scrollLeft = touchScrollLeft - walk;
    });
  }

}
