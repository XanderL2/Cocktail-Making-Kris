import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router: Router = inject(Router);
  public loginForm: FormGroup;


  constructor(){
    this.loginForm = new FormGroup({
      username: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
    });
  }


  navigateToRegister = () => {
    this.router.navigate(['/register']);
  }

}
