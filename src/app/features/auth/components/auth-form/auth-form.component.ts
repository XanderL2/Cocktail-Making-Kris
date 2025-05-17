import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  @Input({required: true}) title!: string;
  @Input() onSubmitAuthForm!: () => void;

  @Input() formGroup!: FormGroup;

}
