import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout/auth-layout.component';
import { MainComponent } from '@shared/layouts/main/main.component';

import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';

export const routes: Routes = [
    
    {
        path: '',
        component: AuthLayoutComponent, 
        children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent }
        ]
    },
    {
        path: '/drinks',
        component: MainComponent,
        children: [
            { path: '', }
        ]
    }

];

