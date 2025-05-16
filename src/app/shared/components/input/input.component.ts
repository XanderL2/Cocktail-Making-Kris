import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';


@Component({
  selector: 'app-input',
  imports: [ FormsModule, MatIconModule, CommonModule ],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  styleUrl: './input.component.scss'
})
export class InputComponent implements ControlValueAccessor {

  private onChange: any = () => {};
  private onTouched: any = () => {};

  @Input({required: true}) name!: string; 
  @Input({required: true}) ariaLabel!: string;
  @Input({required: true}) icon!: string;

  @Input() type: 'text' | 'checkbox' | 'textArea' | 'password' = 'text'; 
  @Input() required: boolean = false;
  @Input() label!: string; 
  @Input() placeHolder: string = ''; 
  @Input() isValidWhen: boolean = false;
  @Input() size: 'large' | 'normal' = "normal"


  public value: string = "";
  @Output() getValue= new EventEmitter<{name: string, value: string}>();

  public emitValue() : void{
    this.getValue.emit({name: this.name, value: this.value});
    this.onChange(this.value);
    this.onTouched();
  }


  writeValue(value: any): void {
    this.value = value; 
  }
  registerOnChange(fn: any): void {
    this.onChange = fn; 
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; 
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("random");
    // throw new Error('Method not implemented.');
  }
  
}
