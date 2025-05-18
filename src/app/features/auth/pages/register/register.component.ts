import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { AuthFormComponent } from "../../components/auth-form/auth-form.component";
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../../core/models/User';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [InputComponent, ButtonComponent, AuthFormComponent, MatIconModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private router: Router = inject(Router);
  private AuthService = inject(AuthService);

  public registerForm: FormGroup; 


  constructor(){
    this.registerForm = new FormGroup({
      username: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl<string>("", [Validators.required, Validators.minLength(5)]),
      imageFile: new FormControl<File | null>(null, [Validators.required])
    });
  }


  navigateToLogin = () =>  {
    this.router.navigate(["/login"]);
  }

  public onRegisterUser = (e: Event) => {
    e.preventDefault();

    const user: User = {
      username: this.registerForm.value?.username,
      password: this.registerForm.value?.password,
      profilePhoto: this.registerForm.value?.imageFile
    }


    if(this.registerForm.invalid){
      console.log("Invalid Form")
      return;
    }

    this.AuthService.registerUser(user)
      .subscribe((response: HttpResponse<any>) => {
        console.log(response)
      }

      
      );
  }


  getErrors(controlName: string): string[] {

    const control = this.registerForm.get(controlName);
    if (!control || !control.errors || !control.touched) return [];
    
    const errors: string[] = [];
    if (control.errors['required']) errors.push(`${controlName} es obligatorio.`);
    if (control.errors['minlength']) errors.push(`${controlName} debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`);

    return errors;
  }

  onClickInputFile = () => this.registerForm.get('imageFile')?.markAsTouched();

}
