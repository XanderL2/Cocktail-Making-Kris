import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-input',
  imports: [ FormsModule, MatIconModule, CommonModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({required: true}) name!: string; 
  @Input({required: true}) ariaLabel!: string;
  @Input({required: true}) icon!: string;

  @Input() type: string = 'text'; 
  @Input() required: boolean = false;
  @Input() label!: string; 
  @Input() placeHolder: string = ''; 
  @Input() textArea: boolean = false;
  @Input() isValidWhen: boolean = false;
  @Input() size: 'large' | 'normal' = "normal"


  public value: string = "";
  @Output() getValue= new EventEmitter<{name: string, value: string}>();

  public emitValue() : void{
    this.getValue.emit({name: this.name, value: this.value});
  }
}