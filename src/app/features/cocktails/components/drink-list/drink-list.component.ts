import { Component, inject, Input } from '@angular/core';
import { Drink } from '../../models/Drink';
import { DrinkItemComponent } from "../drink-item/drink.component";
import { DrinkService } from '../../services/Drink.service';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink-list',
  imports: [DrinkItemComponent, ButtonComponent, MatIconModule, MatIconModule],
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent implements AfterViewInit {

  @Input({ required: true }) drinks: Drink[] = [];

  private drinkService = inject(DrinkService);
  private router = inject(Router)

  @ViewChild('drinkList', { static: true }) drinkListRef!: ElementRef<HTMLDivElement>;


  //? Hooks
  ngAfterViewInit() {

    const drinkListElement = this.drinkListRef.nativeElement;
    let running = true;
    let scrollSpeed = 0;

    const animateScroll = () => {
      if (!running) return;
      drinkListElement.scrollLeft += scrollSpeed;
      requestAnimationFrame(animateScroll);
    };

    drinkListElement.addEventListener('mousemove', (event: MouseEvent) => {

      const rect = drinkListElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const leftZone = width * 0.33;
      const rightZone = width * 0.66;

      if (x < leftZone) {
        scrollSpeed = -((leftZone - x) / leftZone) * 70;

      } else if (x > rightZone) {
        scrollSpeed = ((x - rightZone) / (width - rightZone)) * 100;

      } else {
        scrollSpeed = 0;
      }

    });

    drinkListElement.addEventListener('mouseleave', () => {
      scrollSpeed = 0;
    });

    animateScroll();
  }



  //? Mehods
  public onCLickDrink = (event: MouseEvent, id: number) => {

    const drink: Drink | undefined = this.drinks.find(drink => drink.id === id);

    if (!drink) {
      console.error("Drink selected is undefined");
    }

    this.drinkService.currentDrink = drink!;
  }

  public removeFilters = () => {
    this.drinkService.dataOrigin = 'default';
    this.drinkService.GetRelatedDrinks({});
  }


  public onClickInCreateButton = () =>  {
    this.router.navigate(['/create'])
  }
}
