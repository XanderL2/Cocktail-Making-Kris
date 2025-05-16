import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({required: true}) ariaLabel: string = "button"
  @Input() buttonType: 'primary' | 'secondary' | 'danger' | 'sucess' = 'primary';
  @Input() onClick: (event: Event) => void = () => console.log("Button clicked!"); 

  @Input() disabled: boolean = false;
  @Input() enableWhen: boolean = false;

  @Input() size: 'lg' | 'md' | 'sm' | 'xl' = 'md';
}
