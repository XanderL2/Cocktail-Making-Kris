import { Component, Input } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-searcher',
  imports: [InputComponent, ButtonComponent, MatIconModule],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})
export class SearcherComponent {

  @Input({required: true}) SearchTitle!: string;
  @Input({required: true}) InputName!: string;
  @Input({required: true}) icon!: string;

  //! Hacer required
  @Input() objects: any;


}
