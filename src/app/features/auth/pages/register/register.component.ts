import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [InputComponent, ButtonComponent, AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private router: Router = inject(Router);


  navigateToLogin = () =>  {
    this.router.navigate(["/login"]);
  }

}
