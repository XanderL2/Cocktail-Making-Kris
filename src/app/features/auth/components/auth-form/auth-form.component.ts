import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  imports: [RouterLink],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {

  @Input({required: true}) title!: string;
  @Input() onSubmitAuthForm!: () => void;

}
