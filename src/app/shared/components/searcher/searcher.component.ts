import { Component, Input, Output } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-searcher',
  imports: [MatIconModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent {

  @Input({required: true}) SearchTitle!: string;
  @Input() onSearch!: (e: Event) => void;


  //! Hacer required
  // @Input() objects: any;


  public getSearchInputValue(event: {name: string, value: string}): void {
    console.log(event.value)
  }

}
