import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, AuthFormComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router: Router = inject(Router);
  private authService = inject(AuthService);

  public loginForm: FormGroup;
  public loginSuccess = false;
  public messageError = "";


  constructor(){
    this.loginForm = new FormGroup({
      username: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
    });
  }


  navigateToRegister = () => {
    this.router.navigate(['/register']);
  }

  onSubmitAuthForm = (e: Event) => {
    e.preventDefault();

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.loginUser(username, password)
      .subscribe({
        next: (response: any) =>{
          this.loginSuccess = true
          localStorage.setItem("token", response.token);
          this.router.navigate(['/drinks']);
        },
        error: (resp: HttpErrorResponse) => {
          this.messageError = resp.error.error;
          this.loginSuccess = false;
        }
      }) 
  }

}
