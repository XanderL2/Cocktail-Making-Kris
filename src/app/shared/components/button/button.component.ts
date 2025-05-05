import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({ required: true }) text: string = '';
  @Input({required: true}) ariaLabel: string = "button"

  @Input() buttonType: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() onClick: (event: Event) => void = () => console.log("Button clicked!"); 

  @Input() disabled: boolean = false;
  @Input() enableWhen: boolean = false;

  @Input() size: 'lg' | 'md' | 'sm' | 'xl' = 'md';
}
