import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [InputComponent, ButtonComponent, AuthFormComponent, MatIconModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private router: Router = inject(Router);
  public registerForm: FormGroup; 


  constructor(){
    this.registerForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      imageFile: new FormControl("")
    });
  }


  navigateToLogin = () =>  {
    this.router.navigate(["/login"]);
  }

  public onRegisterUser = (e: Event) => {
    e.preventDefault();
    console.log(this.registerForm.value);
  }

}
