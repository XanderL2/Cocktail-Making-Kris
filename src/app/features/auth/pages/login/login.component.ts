import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, AuthFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router: Router = inject(Router);

  navigateToRegister = () => {
    this.router.navigate(['/register']);
  }

}
